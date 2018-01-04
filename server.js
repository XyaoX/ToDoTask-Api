
const express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://XyaoX:monkeydatabase@ds113580.mlab.com:13580/heroku_tw7wz6qx'); 

var db = mongoose.conenction;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
   });



app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });





app.listen(port,function(){
  console.log("App is running on port "+port);
});