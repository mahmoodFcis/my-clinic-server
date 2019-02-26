const mongoose=require('mongoose');
const jwt=require("jsonwebtoken");
const config=require("config");

/// definition schema of the user
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    userName:{
      type:String,
      required:true
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024
    },
    role: {
    type:String,required:true
    }
  });
  

userSchema.methods.createUser=async function(){
 
  await this.save();
}
userSchema.methods.generateAuthenticationToken=function(){
    
    const token=jwt.sign({role:this.role,name:this.name},config.get("JWTPrivateKey"));
    return token;
}
var User=mongoose.model("User",userSchema);

module.exports=User;



