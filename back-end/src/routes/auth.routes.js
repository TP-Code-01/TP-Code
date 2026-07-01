import express from 'express'
import upload from '../middlewares/upload.middleware.js'
import { createAccount, requestedFields } from '../controllers/auth/sign-up.js'

const authRouter = express.Router()

authRouter.post('/sign-up', upload.fields(requestedFields), createAccount)

export default authRouter

