var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model("Comment");

function response_additions(err, data) {
    if (err) {
        this.json({
            error: err
        });
    }
    this.json({
        data
    });
}

function PostsController() {
    var _this = this;
    this.index = function(req, res) {
      Post.find({}, function(err, data) {
            res.json(data);
        });
    };

    this.comment = function(req, res) {
      console.log(req.body)
      var comment = new Comment();
      comment.comment = req.body.comment
      comment.user = req.body.user
      comment.save(function(err, newcomment){
        if(err){
          res.json(err);
        }else{
          console.log({
            newcomment: newcomment
          });
        }
      })

      Post.findOne({_id: req.body.post_id}, function(err, post){
      if(err){
        console.log(err);
      }else{
        post.comments.push(comment);
        post.save(function(err, updatedPost){
          if(err){
            console.log(err);
          }else{
            res.json(updatedPost);
          }
        })}})

    }

    this.create = function(req, res) {
        var post = new Post(req.body);
        console.log(post)
        post.save(function(err, newpost) {
            if (err){
              res.json(err);
            }
            else{
            res.json({
                newpost: newpost
            });
          }
        });
    }


}



module.exports = new PostsController();
