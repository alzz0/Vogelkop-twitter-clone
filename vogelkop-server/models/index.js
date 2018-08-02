const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb+srv://ali:ali@cluster0-fyyy5.mongodb.net/test?retryWrites=truer", {
  keepAlive: true
});

module.exports.User = require("./user");
module.exports.Message= require("./message")
