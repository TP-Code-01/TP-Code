import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

// utils and config 
import emailTransporter from '../../config/emailTransporter.js'
import { emailVerificationMessage } from '../../utils/emailVerificationMessage.js'
import { cloudinaryUploader } from '../../utils/cloudaniryUploader.js'

// models 
import Account from '../../models/account.model.js'
import Profile from '../../models/profile.model.js'

// 
dotenv.config()


// fields for upload on sign-up route
export const requestedFields = [
    { name: "profileImage", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
]

export const createAccount = asyncHandler(async (req, res) => {

    // check if this email connected with an active account or not
    const account = await Account.findOne({ email: req.body.email }).sort({ createdAt: -1 })

    // if there is an account connected with this email
    if (account) {
        // if active
        if (account.status === "Active") {
            return res.status(400).json({ status: "fail", message: "This email is already connected with an active account" })
        }
        // if banned
        else if (account.status === "Blocked") {
            return res.status(400).json({ status: "fail", message: "This email is blocked" })
        }
        // if unverified
        else if (account.status === "Unverified" && account.verification.expiresAt > Date.now()) {
            return res.status(400).json({
                status: "fail",
                action: "verify_email",
                message: "This email is connected with an unverified account, please verify this email or wait for 10 minutes to try again",
            })
        }
    }

    // check required files
    const profileImage = req.files?.profileImage ? req.files.profileImage[0] : null
    const coverImage = req.files?.coverImage ? req.files.coverImage[0] : null

    // hash password, create verification code
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const verificationCode = Math.floor(Math.random() * 900000 + 100000).toString()

    // create account
    const newAccount = await Account.create({
        email: req.body.email,
        password: hashedPassword,
        verification: { code: verificationCode },
    })

    // upload profile and cover images
    const uploadedProfileImage = profileImage ? await cloudinaryUploader(profileImage.buffer, "profileImages") : null
    const uploadedCoverImage = coverImage ? await cloudinaryUploader(coverImage.buffer, "coverImages") : null

    // create profile of account
    const newProfile = await Profile.create({
        accountId: newAccount._id, // reference
        fullName: req.body.fullName, // full name
        phone: req.body.phoneNumber, // phone number
        dateOfBirth: req.body.dateOfBirth, // date of birth
        gender: req.body.gender, 
        address: req.body.address,
        // images
        profileImage: uploadedProfileImage ? {url: uploadedProfileImage.url, id: uploadedProfileImage.public_id} : null, // profile image
        coverImage: uploadedCoverImage ? {url: uploadedCoverImage.url, id: uploadedCoverImage.public_id} : null, // cover image
    })


    // send code to user
    try {
        await emailTransporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: req.body.email,
            subject: "Verify Your Account",
            html: emailVerificationMessage(newProfile.fullName, verificationCode)
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: "fail", message: "Failed to send verification email" })
    }

    // create token for verify email
    const token = jwt.sign(
        { _id: newAccount._id, email: newAccount.email },
        process.env.JWT_SECRET,
        { expiresIn: "10m" }
    )

    // cookie for verify email
    const isProduction = process.env.NODE_ENV === "production";
    res.cookie("TP-Code-Auth", token, {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "None" : "Lax",
        path: "/",
        maxAge: 10 * 60 * 1000, // 10 minutes
    });

    // // create session
    // await Sessions.create({ 
    //     user: newAccount._id, // reference
    //     token, // token
    //     ip: req.ip, // ip address
    //     userAgent: req.get("user-agent"), // user agent
    //     expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
    // })

    // response
    res.status(201).json({
        status: "success",
        message: "successful registration, check your email",
        action: "verify_email"
    })
})