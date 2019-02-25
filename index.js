const express=require("express");
const mongoose=require("mongoose");
const clinicRouter=require("./routes/clinic.routes");
const userRouter=require("./routes/user.route");
mongoose.connect("mongodb://localhost/myclinic")
.then(()=>{console.log("connected to mongo")})
.catch(e=>console.log(e));
const app=express();
app.use(express.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use('/api/clinics/',clinicRouter);
app.use("/api/user",userRouter)
app.listen(4300,()=>{console.log("listening to port 4300")});