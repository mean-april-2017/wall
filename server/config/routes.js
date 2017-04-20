console.log("routes")
var path = require("path");
var users = require("./../controllers/users.js")
var posts = require("./../controllers/posts.js")


module.exports = function(app){
    app.get("/users", users.index);
    app.get('/users/:id', users.show);
    app.post("/users", users.create);
    app.put("/users/:id", users.update);
    app.delete("/users/:id", users.delete);
    app.post("/login", users.login);
    app.post("/register", users.register);
    app.get("/posts", posts.index);
    app.post("/posts", posts.create);
    app.post("/posts/:id/comment", posts.comment)
};
