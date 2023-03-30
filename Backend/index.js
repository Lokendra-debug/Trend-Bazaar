const exprees=require("express");
require("dotenv").config();
const {connection}=require("./Database/db")
const app=exprees();
app.use(exprees.json())



app.use("*",(req,res)=>{
    res.status(404).send({
        "msg":"404 Not Found",
        "Code":404,
        "Success":false
    })
})



app.listen(process.env.port,async(req,res)=>{
    try {
        await connection
        console.log("DB Connection")
    } catch (error) {
        console.log(error)
    }
    console.log(`server is running on port ${process.env.port}`)
})