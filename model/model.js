let mongoose=require("mongoose")
let user_Schema= new mongoose.Schema({
    name:{
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
    }
})



module.exports=mongoose.model("new_users",user_Schema)

