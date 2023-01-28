let mongoose=require("mongoose")
require("dotenv").config()
let url=process.env.DB_url

mongoose.set('strictQuery', false)
let connectDB=mongoose.connect(url)
.then(()=>{
    console.log("mongoDB is connected")
})
.catch((error)=>{
    console.log(error)
})

module.exports=connectDB