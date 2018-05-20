const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/greenify");

var db = mongoose.connection ;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
	console.log("connected");
});
let plantSchema = mongoose.Schema({
	number: {type: Number, index: {unique: true} },
	name: {type: String, index: {unique: true}},
	description: String,
	imageUrl: String,
  // users:[String]
});

let userSchema = mongoose.Schema({
  // TODO: your schema here!
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phonenumber:Number,
  //plants: Array
  plants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Plant"
    }]
});



let Plant = mongoose.model("Plant", plantSchema);

let User = mongoose.model("User", userSchema);

let saveUser = (data,callback) => {

 var user = new User(data);

 user.save(function(err,data){
 	if(err){
   		callback(err,null);
 	} else {
 		callback(null,data);
 	}
 }); 

};



module.exports.save = saveUser;
module.exports.User = User;
module.exports.Plant = Plant;
