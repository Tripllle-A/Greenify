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

var express = require('express');
var db = require('./db/index.js');
var session = require('express-session')
var bodyParser = require('body-parser')


//var cookieParser = require('cookie-parser');
var helper = require('./helpers.js');
var bcrypt = require('bcrypt');
var Promise = require('bluebird');
//var path = require('path')

const app = express();

app.use(bodyParser())
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//app.use(morgan('combined'));

app.use(session({
  secret: 'shhh, it\'s aa secret',
  resave : false,
  saveUninitialized:true
  
}));


// app.post('/login', function(req,res){
//   var username = req.body.username;
//   var password = req.body.password;

//   db.User.findOne({user:username}, function(err,user){
//     if(err){console.log(err)}
//       else if(!user){res.status(404).send('user is not found')}
//         else{
//           helper.comparaPassword(password,user,function(err,match){
//             if(match){
//               helper.createSession(req,res,user)
//             }else{
//               res.status(404).send('wrong password')
//             }
//           })
//         }
//   })
// })


// app.get('/logout', function(req, res) {
//   req.session.destroy(function() {
//     res.redirect('/login');
//   });
// })


app.post('/signup', function(req,res){
  var name = req.body.username
  var password = req.body.password
  var obj = {'user':name , 'password':password}

  db.User.findOne({user:name}, function(err,user){
    if(err){console.log(err)}
      else if(name === "" || name === null || name === undefined){
        res.status(404).send('enter a valid name')
      }
      else if(!user){
        helper.hash(obj)
        res.send('you can sign in now')
      }
      else{
        res.status(404).send('username is used')
      }
  })
})





// Handle / route
// app.get('/users', function (req, res) {

//   res.json([
//       {id:1,username:"Ammar"},
//       {id:2,username:"lele"}
//     ])
  //  db.User.create({username:"Ammar",password:"123"},function(data, callback){
      
  //  })
 

  // db.save(req.body,function(err, data){
  //  if(err){
  //    res.send(404,err)
  //  }else{
  //    res.send(data)
  //  }
  // })


// });



// Launch the server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});