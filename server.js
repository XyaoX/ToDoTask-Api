// Initiating instances
const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  routes = require('./api/routes/todoListRoutes'),//importing route
  bodyParser = require('body-parser');
  
// Mongoose instance connection url connection
mongoose.Promise = global.Promise;
const myUri = 'mongodb://XyaoX:monkeydatabase@ds113580.mlab.com:13580/heroku_tw7wz6qx'; 
mongoose.connect(myUri, { useMongoClient: true });


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
routes(app); //register the route
app.get("/",(req,res) => {res.sendFile(__dirname +"/index.html");})
app.use(function(req, res) {res.status(404).send({url: req.originalUrl + ' not found'})});
app.listen(port,function(){console.log("App is running on port "+ port);});