var app = angular.module("app");

app.controller('loginController', ['$scope', 'usersFactory', "$location", function($scope, uF, $location){
  var checkUser = function(){
    if(uF.user){
      console.log("you are logged in", uF.user)
      $location.url("/")
    }
  }
  checkUser();

  $scope.register = function(){
    uF.register($scope.registration, function(data){
      if (data.data.errors){
        $scope.errors = data.data.errors;
      }
      else{
        console.log("we are working on a user", data)
        this.user = data.data.data
        console.log("right now uF.data is:", uF.user)
        uF.user = data.data.data
        console.log("Now uF.data is:", uF.user)
        $location.url("/")
      }
    }, function(err){
      console.log("I am an error",err);
    })
  }
  $scope.login = function(){
    uF.login(
      $scope.userLogin,
      function(data){
        if(data.data.errors){
          $scope.errors = data.data.errors;
        }else{
          console.log("we are working on a user", data)
          this.user = data.data.data
          console.log("right now uF.user is:", uF.user)
          uF.user = data.data.data
          console.log("Now uF.user is:", uF.user)
          $location.url("/")
        }
      },
      function(err){
        console.log("I am an error", err)
      }
    );
  }
}]);
