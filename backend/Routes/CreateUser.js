const express=require('express')
const router=express.Router()
const User=require('../models/User')
const {body,validationResult}= require('express-validator')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const jwtSecret="fnfjvnndjvndjvndjvnfdjvndfjvnfjdvndfjvndjvndfvndjvnd";


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
    //encrypting password
    const salt= await bcrypt.genSalt(10);
    let secPassword= await bcrypt.hash(req.body.password,salt);



    //importing the userschema from user.js
    try{
        //model created in the User.js with the help of mongoose 
        await User.create({ //all the datas in this will be reflected in the database in the backend  the format of the schema(data)
            name:req.body.name,
            password:secPassword,
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
            const pwdCompare=await bcrypt.compare(req.body.password,userdata.password);
            if(!pwdCompare){

                return res.status(400).json({errors:"Try logging in with correct creds" });

            }
            //now sending an authorization token jwt to the user login details to be stored in the cache 
            //authentication maintained of the user 
            const data={
                user:{
                    id:userdata.id
                }
            }
            const authToken=jwt.sign(data,jwtSecret)
            return res.json({ success:true,authToken:authToken });
                //res.json({success:true});
        }catch(error){
            console.log(error);
            res.json({success:false});
        }
    })
    

module.exports=router;