import mongoose from "mongoose";
const ContactSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phoneno:{
        type:String,
        require:true,
        unique:true
    },
    address:{
        type:String,
    },
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})
 export const ContactModel=mongoose.model("contact",ContactSchema)