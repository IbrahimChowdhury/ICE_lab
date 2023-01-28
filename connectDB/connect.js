let mongoose=require("mongoose")
require("dotenv").config()
let db_url=process.env.DB_url

mongoose.set('strictQuery', false)
let connectDB=mongoose.connect(db_url)
.then(()=>{
    console.log("mongoDB is connected")
})
.catch((error)=>{
    console.log(error)
})

module.exports=connectDB