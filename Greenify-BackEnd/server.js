// <<<<<<< HEAD
// import express from 'express';
// import morgan from 'morgan';
// import mongoose from 'mongoose';

// // Initialize http server
// const app = express();

// let db = require('./db/index.js');
// var bodyParser = require('body-parser')


// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// app.use(morgan('combined'));

// app.post('/users', function (req, res) {

//   	db.User.create({username:req.body.username,password:req.body.password,phonenumber:req.body.phonenumber},function(data, callback){
//   		res.send(data)
//   	})
 

//   // db.save(req.body,function(err, data){
//   // 	if(err){
//   // 		res.send(404,err)
//   // 	}else{
//   // 		res.send(data)
//   // 	}
//   // })


// });
// =======

// Initialize http server

var express = require("express");
var db = require("./db/index.js");
var session = require("express-session");
var bodyParser = require("body-parser");


//var cookieParser = require('cookie-parser');
var helper = require("./helpers.js");
//var path = require('path')

var app = express();

//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(morgan('combined'));

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


// app.get('/logout', function(req, res) {
//   req.session.destroy(function() {
//     res.redirect('/login');
//   });
// })


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





app.get('/plants', function (req, res) {

 db.Plant.find({}, function(err, plants) {

    res.send(plants);  
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