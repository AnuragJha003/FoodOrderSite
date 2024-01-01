//we need to create a schema for the orders similar we did for user 
//schema for sending data from the mycart of the user to the backend db 
const mongoose=require('mongoose');
const {Schema}=mongoose;

const OrderSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    order_data:{
        type:Array,
        required:true,
    },
})

module.exports=mongoose.model('order',OrderSchema); 