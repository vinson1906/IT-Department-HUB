const mongoose = require("mongoose")
const dotenv = require('dotenv')

dotenv.config()

const MONGO_URI = process.env.MONGODB_URI

const connectDB = async() => {
    try{
        await mongoose.connect(MONGO_URI)
        console.log("DB connected successfully....")
    }
    catch(err){
        console.log("unable to connect mongoDb",err)
    }
}

module.exports = {
    connectDB
}
