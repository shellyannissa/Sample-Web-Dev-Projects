const uri="mongodb+srv://shellyannissa29mongodb:mongodb123@cluster0.q5ymvgv.mongodb.net/?retryWrites=true&w=majority";
import {config} from "dotenv";
import mongoose from "mongoose";
import express from "express";
import cookieParser from "cookie-parser";
const app=express();
app.use(express.json());

config({
    path:"/.data/config.env",
});
app.use(express.json());
app.use(cookieParser());
export const connectDb=()=>{mongoose.connect(uri,{
    dbName:"backendapi"
}). then(()=>console.log("Database conected"))
.catch((e)=>console.error(e));
app.get("/",(req,res)=>{
    res.send("Nice working with you guys");
});}
