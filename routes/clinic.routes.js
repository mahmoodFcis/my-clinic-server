const express=require("express");
const router=express.Router();
const Clinic=require("../models/clinic")
router.get('/', async (req,res)=>{

    const clinics=await Clinic.find({});
    res.send(clinics);

});

router.post("/",async (req,res)=>{

    const c=req.body;
    var clinic=new Clinic({clinicName:c.clinicName,openTime:c.openTime,closeTime:c.closeTime});
    await clinic.save();
    res.send("saved");
});

module.exports=router;