const User=require('../model/userModel');
const History=require('../model/historyModel');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyAoCndwr0M5S07f5M3Eq57vv6uDMW9_6Zo");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

exports.getHome=(req,res,next)=>{
    res.send("<center>this is the main page</center>");
}
exports.saveData=(req,res,next)=>{
    const data=req.body;
    const user=new User(null,data.firstName,data.lastName,data.email,data.password,data.confirmPassword,data.city,data.state);
    user.save().then(
        res.status(201).json({ message: "User registered successfully." })
    ).catch(error=>{
        console.error("Error saving data:", error);
        res.status(500).json({ error: "Database error occurred." });
    })
    console.log(data);
}
exports.authenticateData=(req,res,next)=>{
    const data=req.body;
    const user=new User();
    user.authenticate(data).then((user)=>{if (user) {
        return res.status(201).json({ message: 'User authenticated successfully', user: user });
    } else {
        return res.status(401).json({ error: 'Authentication failed: Invalid credentials' });
    }
    }).catch((error) => {
        console.error("Error during authentication:", error);
        res.status(401).json({ error: 'Authentication failed: Invalid credentials' });
    } )
}
exports.getFromApi = async (req, res, next) => {
    const { prompt } = req.body;
    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }
    try {
        const result = await model.generateContent(prompt);
        const responseText = result.response.text(); 
        return res.status(200).json({ response: responseText });
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return res.status(500).json({ error: "Failed to generate response from Gemini API" });
    }
};
exports.setHistory=async(req,res,next)=>{
    const {_id,sender,text}=req.body;
    console.log(req.body);
    const history=new History(_id,sender,text);
    try {
        await history.save();
          console.log("Data saved successfully!");
      } catch (err) {
        console.error("Data is not being saved:", err);
      }
}
exports.getHistory=(req,res,next)=>{
    const {id}=req.body;
    console.log(req.body);
    History.get(id).then((data)=>{
        console.log(data);
        res.status(200).json({ response: data })
    }).catch((error)=>{
        console.error("Data is not able to be get:", error),
        res.status(500).json({error:"Failed to get data from database"})
})
}
