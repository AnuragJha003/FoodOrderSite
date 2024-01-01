const express=require('express')
const app=express();
const port=5000
const mongoDB=require("./db")
 
app.use((req, res, next) => {
    //res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader( 
      "Access-Control-Allow-Methods", 
      "OPTIONS, GET, POST, PUT, PATCH, DELETE" // what matters here is that OPTIONS is present
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", "true"); // Set to 'true'
    next();
  });
mongoDB();//call the connection request 
app.get('/',(req,res)=>{
    res.send('Hello World!')
})
//using middlewares 
app.use(express.json())
app.use('/api/',require("./Routes/CreateUser"));
app.use('/api/',require("./Routes/DisplayData"));
app.use('/api/',require("./Routes/OrderData"));

app.listen(port,()=>{
    console.log(`Example on port ${port}`)
}) //setting up express.js 
