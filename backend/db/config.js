import mongoose from "mongoose";

const config = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL,)
        console.log("Connected to MongoDB")
    }catch(error){
        console.log("Error in Connectiong to MongoDb",error.message)
    }
}

export default config;