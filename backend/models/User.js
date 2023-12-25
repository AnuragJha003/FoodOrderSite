const mongoose=require("mongoose");

const {Schema}=mongoose;
//2 collections foodcategory and fooditems pushed in from Command line are admin side 
//and no updates or changes allowed on it 
const UserSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('user',UserSchema)
//new collection of the name user is created 