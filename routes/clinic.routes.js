const express=require("express");
const router=express.Router();
const Clinic=require("../models/clinic");
const authMiddleware=require("../middleware/authentication.middleware");
router.get('/', async (req,res)=>{

    const clinics=await Clinic.find({});
    res.send(clinics);

});

router.post("/",authMiddleware,async (req,res)=>{

    const c=req.body;
    var clinic=new Clinic({clinicName:c.clinicName,openTime:c.openTime,closeTime:c.closeTime});
    await clinic.save();
    res.send({added:"true"});
});

module.exports=router;