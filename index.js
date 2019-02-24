const express=require("express");
const mongoose=require("mongoose");
const clinicRouter=require("./routes/clinic.routes");
const userRouter=require("./routes/user.route");
mongoose.connect("mongodb://localhost/myclinic")
.then(()=>{console.log("connected to mongo")})
.catch(e=>console.log(e));
const app=express();
app.use(express.json());
app.use('/api/clinics/',clinicRouter);
app.use("/api/user",userRouter)
app.listen(4300,()=>{console.log("listening to port 4300")});