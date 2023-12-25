const mongoose=require('mongoose');

//const mongoURI='mongodb+srv://gofood:anurag123@cluster0.ogwvqyc.mongodb.net/gofoodmern?retryWrites=true&w=majority'
const mongoURI='mongodb://gofood:anurag123@ac-xxy2vzv-shard-00-00.ogwvqyc.mongodb.net:27017,ac-xxy2vzv-shard-00-01.ogwvqyc.mongodb.net:27017,ac-xxy2vzv-shard-00-02.ogwvqyc.mongodb.net:27017/gofood?ssl=true&replicaSet=atlas-lcpjcy-shard-0&authSource=admin&retryWrites=true&w=majority'

const mongoDB=async () =>{
await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
    if(err)console.log("---",err);
    else{
    console.log("Connected");
    //const fetched_data=await mongoose.connection.db.collection("food_items");
    //fetch from this collection 
    //fetched_data.find({}).toArray( function(err,data){
      //  if(err)console.log(err);
       // else console.log(data);
    //});//all data want (can use filter query and other stuffs)

}});
}

module.exports=mongoDB;