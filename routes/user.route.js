const express=require("express");
const router=express.Router();
const User= require("../models/user");
const bcrypt=require("bcrypt");
router.post("/login",async (req,res)=>{

    if(req.body)
    {
        let user=await User.findOne({name:req.body.userName});
        if(user)
        {
          let match=await bcrypt.compare(req.body.password,user.password);
          if(match)
          {
              let token=user.generateAuthenticationToken();
              res.header("auth-token",token);
              res.send(match);
          }
          else {
             
              res.status(401).send("User name or password is incorrect");
          }
        }
        else {
            
            res.status(401).send("User name or password is incorrect");
        }
    }
});

router.post("",async (req,res)=>{

    if(req.body)
    {
        let user=new User({name:req.body.name,password:req.body.password,role:req.body.role,email:req.body.email});
        await user.createUser();
        res.send(user);
    }
    else res.status(400).send("bad request");

})

module.exports=router;