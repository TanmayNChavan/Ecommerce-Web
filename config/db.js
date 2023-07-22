import mongoose from "mongoose";
import colors from 'colors';

const connectDB = async ()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to the host ${conn.connection.host}`.bgGreen.white);//bgMagenta
        

    } catch (error) {
        console.log(`error is ${error}`.bgRed.white);
    }
};
export default connectDB;