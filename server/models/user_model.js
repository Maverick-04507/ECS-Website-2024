import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    Firstname:{
        type:String,
        require:true,
    },
    Lastname:{
        type:String,
        require:true,
    },
    emailId:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        require:false,
    },
})

const User = mongoose.model("User",userSchema);

export default User;