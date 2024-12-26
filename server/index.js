const express=require('express');
const app=express();
const userRouter=require("./routes/userRouter");
const {dbConnection}=require('./utils/database');
const cors=require("cors");

const port=3551;
app.use(express.json())
app.use(cors());
app.use(express.urlencoded());
app.use(userRouter);
dbConnection(()=>{
    app.listen(port,()=>{
        console.log(`http://localhost:3551`)
    })
})
