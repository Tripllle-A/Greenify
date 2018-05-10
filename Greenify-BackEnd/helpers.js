var bcrypt = require('bcrypt');
var Promise = require('bluebird');
const db = require('./db/index.js')


//checking if the user is logged in or not 
exports.isLoggedIn = function(req) {
  return req.session ? !!req.session.user : false;
};


//creating a session with the logged in username
exports.createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
    req.session.user = newUser;
  //req.session.room='Public';
  //console.log(req.session)
  res.redirect('/');
  
});
};

//comparing password
exports.comparePassword = function(password,user, cb) {
  bcrypt.compare(password, user.password, function(err, isMatch) {
    if (err) return 'error';
    cb(null, isMatch);
  });

}


//hashing the password and saving it to the database
exports.hash = function(obj, callback){
  bcrypt.hash(obj.password, 10, function(err, hash) {
    obj.password=hash
    db.save(obj, function(err,data){
      if(err){
        callback(err,null)
      }else{
        callback(null,data)
      }
    })

  })
}
