import express from "express";
import mongoose from "mongoose";
// import { connectDb } from "./data/database.js";

import userRouter from "./routes/app.js";


export const app=express();
app.use(express.json());
app.use("/users",userRouter);
// app.use({User});

const router=express.Router();
// connectDb();


