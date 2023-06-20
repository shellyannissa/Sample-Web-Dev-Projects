import jwt from "jsonwebtoken";
export const sendCookie=(user,res,statusCode,message)=>{
    const token=jwt.sign({_id:user._id});
    res.status(statusCode).cookie("token",token,{
        httpOnly:true,
        maxAge:15*60*1000,
    }).json({
        success:true,
        message,
    });
}