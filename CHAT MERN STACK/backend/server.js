const express=require("express");
const dotenv=require("dotenv");
const { chats } = require("./data");
const connectDB = require("./config/db");
const app=express();
const userRoutes=require("./routes/userRoutes");
const chatRoutes=require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorHandler");
dotenv.config();
connectDB();

// const uri="mongodb+srv://shellyannissa29:mongodb123@cluster0.q5ymvgv.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json());

app.get("/",(req,res)=>{
        res.send("api is running fine") ;
});
app.use("/api/user/",userRoutes);
app.use("/api/chat/",chatRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT=process.env.PORT;

app.listen(PORT,console.log("server running on PORT 5000"));