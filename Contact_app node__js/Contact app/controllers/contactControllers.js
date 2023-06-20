//mongo db passwd JeXGpbL1NFvH6M4f
// mongodb+srv://shellyannissa29:JeXGpbL1NFvH6M4f@cluster0.jnz75wf.mongodb.net/
const asyncHandler=require("express-async-handler");
const getContact=async (res,req)=>{
    res.status(200).json({message:"Get all contacts"});
};


const createContact=asyncHandler(async (req,res)=>{
    const {name,email,phone_no}=req.body;
    if(!name||!email||!phone_no){
        res.status(400);
        throw new Error("All fields are mandatory");    

    }
        
    res.status(201).json({
        message:"Create contacts"
    });
});

const getContacts=asyncHandler(async (req,res)=>{

    res.status(200).json({
        message:`Get contacts for ${req.params.id}`
    });
   
});

const updateContact=asyncHandler(async (req,res)=>{
    res.status(200).json({
        message:`Update contacts for ${req.params.id}`
    });
});
const deleteContact=asyncHandler(async (req,res)=>{
    res.status(200).json({
        message:`Delete contacts for ${req.params.id}`
    });
});


module.exports={getContact,
    createContact,
    getContacts,
    updateContact,
    deleteContact    
};