import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';

// Initialize http server
const app = express();

let db = require('./db/index.js');
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan('combined'));

app.post('/users', function (req, res) {

  	db.User.create({username:req.body.username,password:req.body.password,phonenumber:req.body.phonenumber},function(data, callback){
  		res.send(data)
  	})
 

  // db.save(req.body,function(err, data){
  // 	if(err){
  // 		res.send(404,err)
  // 	}else{
  // 		res.send(data)
  // 	}
  // })


});
// Launch the server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});