import mongoose from "mongoose"

const URI = process.env.MONGODB_URI||"mongodb+srv://technicalecs27:SSDSN2027@cluster0.fzw13.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb= async()=>{
    try {
        const conn= await mongoose.connect(URI);
        console.log(`connection successful to mongoose at : ${conn.connection.host}`);
        
    } catch (error) {
        console.error("database connection failed")
        process.exit(0);        
    }
}

export default connectDb;