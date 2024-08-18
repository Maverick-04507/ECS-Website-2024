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
        if((scholarid)){
            console.log(scholarid,"in")
            // res.redirect("https://www.ecs.college/");
            res.status(200).json({
                mssg:"logged in Successfully"
                // userID
            })
        }
        else window.alert("Please Sign Up");
    } catch (error) {
        res.status(400).send({mssg:"Page not found"})
    }
}

export default {RegisterHTML,SignIn};