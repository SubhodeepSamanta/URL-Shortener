import { cookieOptions } from "../config/config.js";
import { loginUser, registerUser } from "../services/auth.service.js";


export const registerController= async (req,res)=>{
    const {name,email,password}= req.body;
    const token= await registerUser(name,email,password);
    res.cookie("accessToken",token,cookieOptions);
    res.status(201).json({message:"success"});
}

export const loginController= async (req,res)=>{
    const {email,password}= req.body;
    const token= await loginUser(email,password);
    res.cookie("accessToken",token,cookieOptions);
    res.status(200).json({message:"login success"});
}