// Initiating instances
const express = require('express'),
  app = express(),
  config = require('./config.json'),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  routes = require('./api/routes/todoListRoutes'),//importing route
  bodyParser = require('body-parser');
  
// Mongoose instance connection url connection
mongoose.Promise = global.Promise;
const myUri = `mongodb://${config.username}:${config.password}@ds113580.mlab.com:13580/heroku_tw7wz6qx`; 
mongoose.connect(myUri, { useMongoClient: true });


// Middleware
app.use('/', function(res,req){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
routes(app); //register the route
app.get("/",(req,res) => {res.sendFile(__dirname +"/index.html");})
app.use(function(req, res) {res.status(404).send({url: req.originalUrl + ' not found'})});
app.listen(port,function(){console.log("App is running on port "+ port);});