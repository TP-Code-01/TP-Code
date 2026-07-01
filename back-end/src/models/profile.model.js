import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({

    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account',
        required: true,
        unique: true
    },

    // name
    fullName: {
        type: String,
        required: true,
        trim: true
    },

    // profile image
    profileImage: {
        url: { type: String },
        id: { type: String, select: false },
    },
    
    // cover image
    coverImage: {
        url: { type: String },
        id: { type: String, select: false },
    },

    // bio
    bio: {
        type: String,
        default: ''
    },

    // phone
    phone: {
        type: String,
        default: ''
    },

    // date of birth
    dateOfBirth: {
        type: Date
    },

    // address
    address: {
        type: String,
    },

    gender: { type: String, enum: ["Male", "Female"], required: true },

}, { timestamps: true })

const Profile = mongoose.model('profile', profileSchema)
export default Profile
