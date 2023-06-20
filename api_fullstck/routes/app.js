import express from "express";
import {  getAllUsers,  getUserDetails, login, register } from "../controllers/user.js";
import {User} from "../models/app.js";
import bcrypt from "bcrypt";

const router=express.Router();

router.get("/all",getAllUsers); 
router.post("/new",register);
router.post("/login",login);


router.route("/.users/:id").get(getUserDetails);


export default router;