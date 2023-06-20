const express=require("express");
const connectDb=require("./config/dbConnection");
const dotenv=require("dotenv").config();
const errorHandler=require("./middleware/errorHandler.js");
connectDb();
const app=express();
app.use(express.json());
const port=process.env.PORT;
app.use('/api/contacts',require("./routes/contactRoutes"));
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`server running on the port ${port}`);
});