let router = require("express").Router()

const { Script } = require("vm")
let users = require("../model/model")
let path=require("path")
const { appendFile } = require("fs")


router.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + "/../view/home.html"))
})


router.post("/register", async (req, res) => {
        try {
                let { name, email, password } = req.body
                let user = await users.find({ email: email })
                if (user && user != "") {
                        res.send("user is already exits")
                }
                else if (name!="" && email!="" && password!="") {
                        let newUser = users({
                                name: name,
                                email: email,
                                password: password
                        })
                        await newUser.save()
                        res.render("register_successful",{
                              name:name,
                              email:email,
                              password:password  
                        })
                        

                }
                else {
                        res.send("please fill up the section")
                }


        } catch (error) {

                res.status(404).json({ message: error.message })
        }
})






router.post("/login",async(req,res)=>{
                try {
                        let {email,password}=req.body
                        let user= await users.findOne({email:email})
                        if(user && password==user.password)
                        {
                            await  users.find({},(err,usr)=>{
                                res.render("login_successful",{
                                        users:usr
                                })
                              })
                        }
                } catch (error) {
                        
                }
})






module.exports = router