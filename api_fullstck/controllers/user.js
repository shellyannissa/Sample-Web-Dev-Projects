import {User} from "../models/app.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";

export const getAllUsers=async (req,res)=>{
    const users=await User.find({});
        console.log(req.query); 
        res.status(200).json({
        success:true,
        users,
    });
};
export const login=async (req,res,next)=>{
    const {name,email,password}=req.body;
    const user=await User.findOne({email}).select("+password");
    if(!user)
    return res.status(404).json({
        success:false,
        message:"Invalid Username or Password",
    });
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(404).json({
            success:false,
            message:"Invalid Username or Password",
        });
        
    }
    sendCookie(user,res,200,`Welcome back,${user.name}`);

};

export const register=async (req,res,next)=>{
    const {name,email,password}=req.body;
    let user=await User.findOne({email});
    console.log(user);
    if(user){
        return res.status(404).json({
            success:false,
            message:"User already exists"
        });
    }
    // const salt = await bcrypt.genSalt(10);
    const hashpswd=await bcrypt.hash(password,10);
    user=await User.create({
        name,
        email,
        password:hashpswd
    });
    sendCookie(user,res,201,"Registered Successfully");

};
export const getUserDetails=async (req,res,next)=>{
    const id="myId";
    const {token}=req.cookies;
    console.log(token);
    const user=await User.findById(id);
    res.status(200).json({
        success:true,
        user,
    });
};
