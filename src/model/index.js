import mongoose from "mongoose";
import 'dotenv/config.js'


// mongoose.connect(`${process.env.MONGODB_URL}`) is one of the method to construct url
// mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_DB}`)

mongoose.connect(`${process.env.MONGODB_URL}/${process.env.MONGODB_DB}`,)
.then((value)=>console.log("mongoose connected"))
.catch((err)=>console.log(err))



export default mongoose