import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    Name:{
        type:String,
        require:true,
    },
    scholarid:{
        type:Number,
        require:true,
    },
    email:{
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