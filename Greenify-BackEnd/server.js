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
// Handle / route
app.get('/users', function (req, res) {

  res.json([
      {id:1,username:"Ammar"},
      {id:2,username:"lele"}
    ])
  // 	db.User.create({username:"Ammar",password:"123"},function(data, callback){
  		
  // 	})
 

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