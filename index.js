const express = require("express");
const app = express();

const mongoose = require ("mongoose");


const userRouter =  require('./routers/userRouters');



mongoose.connect('mongodb://127.0.0.1:27017/db_mern');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/user",userRouter);





app.listen(8080, function () {
    console.log("SERWER DZIAŁA")
}
)