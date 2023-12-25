const express=require('express')
const router=express.Router()
const User=require('../models/User')
const {body,validationResult}= require('express-validator')

router.post("/createuser",[
body('email').isEmail(),
body('name').isLength({min:5}),
//password must be atleast 5 chars long 
body('password','incorrect password').isLength({min:5}) ]
,async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array() });
    }
    
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


router.post("/loginuser",[
    body('email').isEmail(),
    //password must be atleast 5 chars long 
    body('password','incorrect password').isLength({min:5}) ]
      ,async(req,res)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array() });
        }
        let email=req.body.email;
        //importing the userschema from user.js
        try{
            //model created in the User.js with the help of mongoose 
            let userdata=await User.findOne(
                {email});
            if(!userdata){
                return res.status(400).json({errors:"Try logging in with correct creds" });
            }
            if(req.body.password !== userdata.password){

                return res.status(400).json({errors:"Try logging in with correct creds" });

            }
            return res.json({success:true});
                //res.json({success:true});
        }catch(error){
            console.log(error);
            res.json({success:false});
        }
    })
    

module.exports=router;