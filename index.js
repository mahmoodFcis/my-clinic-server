const express=require("express");
const mongoose=require("mongoose");
const clinicRouter=require("./routes/clinic.routes");
mongoose.connect("mongodb://localhost/myclinic")
.then(()=>{console.log("connected to mongo")})
.catch(e=>console.log(e));
const app=express();
app.use(express.json());
app.use('/api/clinics/',clinicRouter);
app.listen(4300,()=>{console.log("listening to port 4300")});