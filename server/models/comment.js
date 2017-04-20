var mongoose = require("mongoose");
var usersSchema = require("./user.js")
var commentsSchema= new mongoose.Schema({
  comment:{
  type: String,
  required: true,
  },
  user:[usersSchema],

}, {timestamps:true})

mongoose.model("Comment", commentsSchema);
