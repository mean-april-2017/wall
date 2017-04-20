var mongoose = require("mongoose");
var commentsSchema = require("./comment.js");
var usersSchema = require("./user.js")
var postsSchema= new mongoose.Schema({
  content:{
  type: String,
  required: true,
  },
  comments: [commentsSchema],
  user:[usersSchema],

}, {timestamps:true})

mongoose.model("Post", postsSchema)
