let express=require("express")
const router = require("./router/router")
let app=express()
require("dotenv").config()


let port=process.env.PORT || 5000
app.use(express.urlencoded({extended:true}))
app.use(express.json())


// when we work with ejs then we set the view engine to ejs
app.set("view engine", "ejs")



// when we want to work with both html and css then we use express.static("folder_name")
app.use(express.static("view"))


require("./connectDB/connect")

app.use(router)


// router error
app.use((req,res,next)=>{
    res.status(404).json({message:"Router error"})
})

// server error 
app.use((err,req,res,next)=>{
    res.status(500).json(err)
})


// server 
app.listen(port,()=>{
    console.log(`your server is running at http://localhost:${port}`)
})
