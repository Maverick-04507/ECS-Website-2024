import express from "express";
import router from"./router/auth-route.js";
import connectDb from "./utils/db.js";
import cors from 'cors'

const app=express();
const PORT= 5000;

app.use(express.json())
app.use(cors())

app.use("/",router);
// app.use("/api/auth",router);
connectDb().then(()=>{//after connection start App server at PORT no.

    app.listen(PORT,()=>{
        console.log(`Server is working in port: ${PORT}`);    
    })
    
})