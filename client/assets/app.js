var app = angular.module("app", ["ngRoute", "ngCookies"]);

app.config(function ($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl: "partials/posts.html",
    controller: "postsController",
    controllerAs: "PC"
  })
  .when("/login", {
    templateUrl: "partials/login.html",
    controller: "loginController",
    controllerAs: "LC"
  })
  .otherwise("/");
})
