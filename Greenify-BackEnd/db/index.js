const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/greenify");

var db = mongoose.connection ;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
	console.log("connected");
});
//Now in the database we have two schemas one for the plant and one for the user
//the plant schema has 4 properties two of them are unique 'number,name'

let plantSchema = mongoose.Schema({
	number: {type: Number, index: {unique: true} },
	name: {type: String, unique: true},
	description: String,
	imageUrl: String,
  origin: String,
  growth: String,
  light: String,
  watering: String,
  Fertilizer: String,
  Humidity: String
});

//For the user schema has 4 properties one of them is unique 'username',
//and for the plants property, it is an array contain the type and ref related for the Plant model.
let userSchema = mongoose.Schema({
  // TODO: your schema here!
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phonenumber:Number,
  plants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Plant"
    }]
});

//these are two model one for every schema.

let Plant = mongoose.model("Plant", plantSchema);

let User = mongoose.model("User", userSchema);

//this function will make an instance from the User model and save it in the database

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


//Now we are exporting these things to use them outside the file.
module.exports.save = saveUser;
module.exports.User = User;
module.exports.Plant = Plant;
