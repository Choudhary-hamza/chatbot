const mongoDb=require("mongodb");
const MongoClient=mongoDb.MongoClient;
const mongoUrl="mongodb+srv://InnovatorX:LIvmon7LqmvR10n3@innovatorx.uo2oh.mongodb.net/?retryWrites=true&w=majority&appName=InnovatorX";
let _db;
exports.dbConnection=async (Callback)=>{
    try{
    const client=await MongoClient.connect(mongoUrl);
    _db=client.db("chatbot");
    console.log("connection has been created successfully");
    if(typeof Callback === "function"){
        Callback();
    }
    }
    catch(error){
        console.log("there is an error while connecting the database",error);
    }
}
exports.getData=()=>{
    if(!_db){
        throw new Error("it is not getting data from the database");
    }
    return _db;
}