const { getData }= require("../utils/database");
module.exports=class User{
    constructor(_id,firstName,lastName,email,password,confirmPassword,city,state){
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.password=password;
        this.confirmPassword=confirmPassword;
        this.city=city;
        this.state=state;
        if(_id){
            this._id=_id;
        }
    }
    save(){
        const db=getData();
        return db.collection("profile").insertOne(this);
    }
    authenticate(data){
        const {email,password}=data;
        const db=getData();
        return db.collection("profile").findOne({
            $and: [
            { email:email },             // Check if the email matches
            { password: password }        // Check if the password matches
        ]})
    }
}