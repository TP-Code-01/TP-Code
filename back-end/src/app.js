import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'


// import routes



const app = express() 
app.set('trust proxy', true); // for get real ip

dotenv.config()

////////////////////////////////////////////////////  cors
const allowedOrigins = process.env.ORIGINS.split(',') || []
app.use(cors({
    origin: (origin, callBack) => {
        if(!origin || allowedOrigins.includes(origin)) return callBack(null, true)
        else return callBack(new Error("NOT allowed by CORS"))
    },
    methods:["POST", "GET", "PUT", "PATCH","DELETE"],
    credentials:true
}))


app.use(express.json())
app.use(cookieParser())


// connect with DB
const ConnectDB = async () => {
    try{
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.DB_URI)
        console.log("connected to:", mongoose.connection.name)
    }
    catch(error){
        console.log(error.message)
        process.exit(1)
    }
}
ConnectDB()


////////////////////////////////////////////////////  test route
app.get('/', (req, res) => {
    return res.status(200).json({status:'success', message:"hello in TP-Code Server", data: null})
})


/////////////////////// use routes


// not found routes
app.use((req, res) => {
    return res.status(404).json({status:'fail', data:null, message:`Route ${req.originalUrl} not found.`})
})

// error middleWare
app.use((err, req, res, next) => {
    console.log(err)
    return res.status(500).send({status:'fail', message:err.message, data: null})
})


if (process.env.NODE_ENV !== 'production') { 
  const Port = process.env.PORT || 5000
  app.listen(Port, () => console.log(`Server running on port ${Port}...`))
}

// when deploy on vercel 
export default app   



