const express=require('express')
const app=express();
const port=5000
const mongoDB=require("./db")

mongoDB();//call the connection request 
app.get('/',(req,res)=>{
    res.send('Hello World!')
})
//using middlewares 
app.use(express.json())
app.use('/api/',require("./Routes/CreateUser"));
app.listen(port,()=>{
    console.log(`Example on port ${port}`)
}) //setting up express.js 
