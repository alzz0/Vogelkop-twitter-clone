require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors"); //cross origin and resource sharing makign requests from other domains
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
const db = require("./models");
const messagesRoutes=require("./routes/messages")
const{loginRequired,ensureCorrectUser}=require("./middleware/auth")
const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/user/:id/messages",
        loginRequired,
        ensureCorrectUser,
        messagesRoutes
       )


app.use("/api/messages",loginRequired,async function(req,res,next){
    try{
        let messages=await db.Message.find()
        .sort({createdAt:"desc"})
        .populate("user",{
            username:true,
            profileImageUrl:true
        })
        return res.status(200).json(message)
    }catch(err){
        return next(err)
    }
})
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
  console.log(`Server is starting on port ${PORT}`);
});
