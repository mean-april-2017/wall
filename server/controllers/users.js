var mongoose = require('mongoose'),
    User = mongoose.model('User');

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

function UsersController() {
    var _this = this;
    this.index = function(req, res) {
        User.find({}, function(err, data) {
            res.json(data);
        });
    };
    this.create = function(req, res) {
        res.json({
            future: 'create'
        });
    }
    this.update = function(req, res) {
        res.json({
            future: 'update'
        });

    }
    this.delete = function(req, res) {
        res.json({
            future: 'delete'
        });

    }
    this.show = function(req, res) {
        res.json({
            future: 'show'
        });
    }

    this.login = function(req, res) {
        User.findOne({
            email: req.body.email
        }, function(err, data) {
          console.log("**************", data.validPassword(req.body.password))
            if (err) {
                res.json({
                        errors: {
                            login_reg: {
                                message: "user name and/or password is invalid",
                                kind: "what didn't work",
                                path: "reference to the schema's name",
                                value: "cause of the initial error"
                            }
                        },
                        name: "Validation error"
                    }

                );
            } else if (data && data.validPassword(req.body.password)) {
                res.json({
                   data: data
                });
            } else {
                res.json({
                        errors: {
                            login_reg: {
                                message: "user name and/or password is invalid",
                                kind: "what didn't work",
                                path: "reference to the schema's name",
                                value: "cause of the initial error"
                            }
                        },
                        name: "Validation error"
                    }

                );
            }
        })
    }
    this.register = function(req, res) {
      // console.log("HIT", req.body);
        var user = new User(req.body);
        console.log(user)
        user.save(function(err, newuser) {
          console.log("HIT", err, newuser);
            if (err){
              res.json(err);
            }
            else{
            res.json({
                newuser: newuser
            });
          }
        });
        // res.json({future:'register'});
    }


}



module.exports = new UsersController();
