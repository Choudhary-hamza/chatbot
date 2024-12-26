const { getData }= require("../utils/database");
module.exports=class History{
    constructor(_id, sender, text) { 
        this.Userid = _id;
        this.sender = sender;
        this.text = text;
      }
      save() { 
            const db =  getData();
            return db.collection("history").insertOne(this);
      }
     static get(userId){
        const db =  getData();
        return db.collection("history").find({ Userid: userId }).toArray();
     }
}