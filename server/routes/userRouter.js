const express=require('express');
const {saveData,getHome,authenticateData,getFromApi,setHistory,getHistory}=require("../controller/userController")
const userRouter=express.Router();
userRouter.get("/",getHome);
userRouter.post("/sign-up",saveData);
userRouter.post("/sign-in",authenticateData);
userRouter.post("/chat",getFromApi);
userRouter.post('/chat/history',setHistory);
userRouter.post('/chat/get-history',getHistory);
module.exports=userRouter;