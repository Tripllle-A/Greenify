const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/greenify');

var db = mongoose.connection ;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
	console.log("connected")
});

let userSchema = mongoose.Schema({
  // TODO: your schema here!
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phonenumber:Number

});

let User = mongoose.model('User', userSchema);

let save = (data,callback) => {

 var user = new User(data)

 user.save(function(err,data){
 	if(err){
   		callback(err,null)
 	} else {
 		callback(null,data)
 	}
 }) 

}

module.exports.save = save;
module.exports.User = User;