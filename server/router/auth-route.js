import express from "express";
import Authcontrollers from "../controllers/register.js";

const router= express.Router();
router.post("/register", Authcontrollers.RegisterHTML);
router.post("/signin", Authcontrollers.SignIn);


export default router