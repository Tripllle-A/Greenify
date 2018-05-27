var express = require("express");
var db = require("./db/index.js");
var session = require("express-session");
var bodyParser = require("body-parser");


//var cookieParser = require('cookie-parser');
var helper = require("./helpers.js");
var app = express();

//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  secret: "shhh, it's aa secret",
  resave : false,
  saveUninitialized:true
  
}));


app.post("/login", function(req,res){

  var username = req.body.username;
  var password = req.body.password;

  db.User.findOne({username:username}, function(err,user){
    if(err){
      res.send(err);
    }
      else if(!user){res.status(404).send("user is not found");}
        else{
          helper.comparePassword(password,user,function(err,match){
            if(match){
              helper.createSession(req,res,user);

            }else{
              res.status(404).send(err);
            }
          });
        }
        
  });
});


app.get("/logout", function(req, res) {
  req.session.destroy(function() {
    res.send("Loggedout");
  });
});


app.post("/users", function(req,res){
  var username = req.body.username;
  var password = req.body.password;
  var phonenumber = req.body.phonenumber;
  var obj = {username:username , password:password , phonenumber:phonenumber};

  db.User.findOne({username:username}, function(err,user){
    if(err){
      res.send(err);
    }
      else if(!user){
      helper.hash(obj,function(err,data){
        if(err){
          res.send(err);
        }else{
          res.status(200).send(data);
        }
      });
    }else{
      res.status(404).send("exist");
    }

  });

});





app.get("/plants", function (req, res) {

 db.Plant.find({}, function(err, plants) {

    res.send(plants);  
  });

});


app.get("/myplants", function (req, res) {
    var actual = req.session.user.username;
    db.User.findOne({username:actual},function(err,user){
      res.send(user.plants);
    });
});


app.post("/forkOne", function (req, res){
    var plant = req.body.name;
    console.log("plant",plant);
    db.User.findOne({username:req.session.user.username}, function(err,user){
       db.Plant.findOne({name:plant}, function(err, plant){
        if (err) {
          console.error(err);
        } else {
          if(user.plants.indexOf(plant._id) === -1){
          user.plants.push(plant._id);
          console.log(1111222222233333,user.plants);
          user.save();
          res.status(200).send();
          }
        }
      });
    });
});



app.get("/viewProfile", function(req, res) {
  db.User.findOne({username: req.session.user.username})
    .populate("plants")
    .exec(function(err, user) {
      res.send(user);
    });
});



app.get("/plants/:number", function (req, res) {

 var number = req.params.number;
  db.Plant.findOne({number:number}).exec(function (err, plant) {
    if(err){
      console.log(err);
    }else{
      res.json(plant);
    }
  });
});

app.post("/deletePlant/:id",function(req, res){

    var id = req.params.id;
    var arr = [];
  db.User.findOne({username:"ammar"}, function(err, data){

    arr = data.plants;
    for(var i = 0 ; i < arr.length ; i++){
      if(arr[i].toString() === id){
        data.plants.splice(i, 1);
      }
    }
    db.User.findOneAndUpdate({username: "ammar"}, 
      
      { plants: arr }, function(err, mod){
        res.send(arr);
      });
    
  });

});

// Launch the server on port 3000
if(!module.parent) {
var port = 3000;
app.listen(port, () => {
  console.log("Listening at http:/localhost:" + port );
});
}
module.exports = app;