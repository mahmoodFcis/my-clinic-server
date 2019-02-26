const mongoose=require("mongoose");
const schema=mongoose.Schema;
const clinicShema=new schema({

    clinicName:{
        type:String,
        required:true,
        minlength:10
    },
    openTime:String,
    closeTime:String,
    address:String

});

module.exports=mongoose.model("Clinics",clinicShema);