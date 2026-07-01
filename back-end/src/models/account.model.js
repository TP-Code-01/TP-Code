import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const accountSchema = new mongoose.Schema({
    // personal info
    email:{type:String, required:true},
    password:{type:String, required:true, select:false},

    status: {
        type: String,
        enum: ["Active", "Blocked", "Deleted", "Unverified"],
        default: "Unverified"
    },

    // roles
    role:{
        type:String,
        enum: ["admin", "user"],
        default: "user"
    },

    // verify email 
    verification:{
        code: {type:String},
        expiresAt: {type:Date, default: () => (Date.now() + 10 * 60 * 1000 )},
    },

}, {timestamps:true})

accountSchema.methods.checkPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

accountSchema.index({email:1,createdAt:-1})

const Account = mongoose.model('account', accountSchema)
export default Account