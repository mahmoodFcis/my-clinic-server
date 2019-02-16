const mongoose=require("mongoose");
const schema=mongoose.Schema;
const clinicShema=new schema({

    clinicName:{
        type:String,
        required:true,
        minlength:10
    },
    openTime:Number,
    closeTime:Number,
    address:String

});

module.exports=mongoose.model("Clinics",clinicShema);