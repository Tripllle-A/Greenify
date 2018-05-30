//For this file we are using it as a helper for four processes two of them
//for the session 'login/logout'
//and the others one for comparing the password during login process and the last one for 
//hashing the password in the signup process

var bcrypt = require("bcrypt");
const db = require("./db/index.js");


//checking if the user is logged in or not 
exports.isLoggedIn = function(req) {
  return req.session ? !!req.session.user : false;
};


//creating a session with the logged in username
exports.createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
    req.session.user = newUser;
    res.status(200).send();
   });
};

//comparing password
exports.comparePassword = function(password,user, cb) {
  bcrypt.compare(password, user.password, function(err, isMatch) {
    if (err){
      cb(err);
    }else{
    cb(null, isMatch);
  }
  });

};


//hashing the password and saving it to the database
exports.hash = function(obj, callback){
  bcrypt.hash(obj.password, 10, function(err, hash) {
    obj.password=hash;
    db.save(obj, function(err,data){
      if(err){
        callback(err,null);
      }else{
        callback(null,data); 
      }
    });

  });
};
