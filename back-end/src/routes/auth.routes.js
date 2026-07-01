import express from 'express'
import upload from '../middlewares/upload.middleware.js'
import { createAccount, requestedFields } from '../controllers/auth/sign-up.js'
import { Sign_in } from '../controllers/auth/sign-in.js'
import verifyEmail from '../controllers/auth/verify-email.js'

import { verifyToken } from '../middlewares/verifyToken.middleware.js'
const authRouter = express.Router()



// sign up
authRouter.post('/sign-up', upload.fields(requestedFields), createAccount)

// sign in
authRouter.post('/sign-in', Sign_in)

// verify email
authRouter.post('/verify-email', verifyToken("TP-Code-Auth"), verifyEmail)





export default authRouter

