const express=require('express')
const router=express.Router()
const User=require('../models/User')


router.post("/createuser",async(req,res)=>{
    //importing the userschema from user.js
    try{
        //model created in the User.js with the help of mongoose 
        await User.create({ //all the datas in this will be reflected in the database in the backend  the format of the schema(data)
            name:req.body.name,
            password:req.body.password,
            email:req.body.email,
            location:req.body.location
        })//create the new data in the schema
        res.json({success:true});
    }catch(error){
        console.log(error);
        res.json({success:false});
    }
})


module.exports=router;