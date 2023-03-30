const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true,unique:true},
    Password:{type:String,required:true},
    Gender:{type:String,required:true, enum:["Male","Female"]},
    Location:{type:String,required:true},
    Contact:{type:String,required:true},
    isAdmin:{type:Boolean}
},{
    timestamps:true,
    versionKey:false
})

const UserModel=mongoose.model("user",userSchema)
module.exports=UserModel;