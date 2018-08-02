const mongoose = require("mongoose")
const User = require("./user")


const messageSchema= new mongoose.Schema({
    text:{
        type:String,
        required:true,
        maxLength:160
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:true
})

messageSchema.pre("remove",async function(next){
    //find user remove id from message list then save user return next
    try{
        let user = await User.findById(this.user)
        user.messagse.remove(this.user)
        await user.save()
        return next()
    } catch(err){
        return next(err)
    }
});

const Message= mongoose.model("Message",messageSchema)
module.exports = Message