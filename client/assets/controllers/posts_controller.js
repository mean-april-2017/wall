var app = angular.module("app");
app.controller('postsController', ['$scope', 'postsFactory', "usersFactory", "$location", function($scope, pF, uF, $location){
  var self = this;
  self.user = uF.user;
  self.newPost ={};
  self.newComment = {};
  var index = function(){
    if(uF.user)
    pF.index(function(returnedData){
      self.posts = returnedData.data
      console.log(self.posts)
      console.log(self.newComment)
    })
  }

  var checkUser = function(){
    console.log('calleds');
    if(!uF.user){
      $location.url("/login")
    }
  }

  self.create = function(){
    self.newPost.user = self.user

    pF.create(self.newPost, function(data){
      if (data.data.errors){
        self.errors = data.data.errors;
      }
      else{
        self.newPost = {};
      }
    }, function(err){
      console.log("I am an error",err);
    })
    index()
  }
  self.comment = function(post, newComment){

    self.newComment["comment"]= newComment;
    self.newComment["user"] = uF.user;
    self.newComment["post_id"] = post;
    data = self.newComment
    pF.comment(data, function(data){
      if (data.data.errors){
        self.errors = data.data.errors;
      }
      else{
        self.newComment = {};
      }
    }, function(err){
      console.log("I am an error",err);
    })
    index()

  }
  self.logout = function(){
    console.log("The current situation:", uF.user)
    uF.user = null
    console.log("Now its like: ", uF.user)
    checkUser();
  }
  checkUser()
  index()

}]);
