console.log("WEEE MADDE IT HERERE")

app.factory("postsFactory", ["$http", function($http){
  var postsFactory = function(){
    this.comment = function(data, callback, errback){
      console.log("we are on our way")
      $http.post('/posts/:id/comment', data).then(callback, errback);
    }
    this.index = function(callback){
      $http.get("/posts").then(callback);
    }
    this.create = function(data, callback, errback){
      $http.post("/posts", data).then(callback, errback);
    }
  }
  return new postsFactory()
}]);
