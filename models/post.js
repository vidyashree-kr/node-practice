const mongoose=require('mongoose')
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:4,
        maxlength:150
    },
    body:{
        type:String,
        required:true,
        minlength:4,
        maxlength:150
    }
})
module.exports=mongoose.model("post",postSchema)