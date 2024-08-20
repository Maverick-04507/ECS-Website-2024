import User from "../models/user_model.js";

const RegisterHTML=async (req,res)=>{
    try {

        const {Name,
            scholarid,
            email,
            password,
            phone}=req.body;
        console.log(req.body,"high",scholarid,"hi")
        
        if(scholarid){
            console.log(scholarid,"in")
            //verify if admin later job
            await User.create({
                Name:req.body.Name,
                scholarid:req.body.scholarid,
                email:req.body.email,
                password:req.body.password,
                phone:req.body.phone,
                isAdmin:false
            })
            res.status(200).json({
                mssg:"registered Successfully"
                // userID
            })
        }
        
    } catch (error) {
        res.status(400).send({mssg:"Page not found"})
    }
}
const SignIn=async (req,res)=>{
    try {
        console.log("entered")
        const {
            scholarid,
            email,
            password,
            }=req.body;
        console.log(req.body,"high",scholarid,"hi")
        User.findOne({scholarid: scholarid})
        .then(User =>{
            if(User){
                if(User.password===password){
                    res.status(200).json(
                        "Success"
                    )
                    console.log("Login Successful");

                }
                else {
                    res.status(500).json("Invalid Credentials")
                    window.alert("Invalid Credentials")};

            }
            else{
                res.status(500).json("Not Found")
                res.json("Please Signup")
                window.alert("Please Signup User Not Found")
            }
        })
        .catch(()=>{
            console.log("error")
        })
        
                 
        
    } catch (error) {
        res.status(400).send({mssg:"Page not found"})
    }
}

export default {RegisterHTML,SignIn};