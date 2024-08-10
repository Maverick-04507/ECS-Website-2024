import User from "../models/user_model.js";

const RegisterHTML=async (req,res)=>{
    try {

        const {Firstname,
            Lastname,
            emailId,
            password,
            phone}=req.body;
        console.log(req.body,"high",emailId,"hi")
        // let userExist={};
        // if(emailId!=""){
        //      userExist =await User.findOne(emailId)
        //      console.log(userExist);
        // }
        
        // if (userExist==null&&emailId!=null)
        //      {
        //     await User.create(Firstname, Lastname,username, emailId, password, phone)
        //     // res.send("welcome to my Register")
        //     console.log('created user');
        // }
        // else 
        // res
        // .status(400).json({mssg:"Email already exists"})
        // return //must
        if(emailId){
            console.log(emailId,"in")
            await User.create({
                Firstname:req.body.Firstname,
                Lastname:req.body.Lastname,
                emailId:req.body.emailId,
                password:req.body.password,
                phone:req.body.phone,
                isAdmin:true
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

export default {RegisterHTML};