// modules=================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var mongoose       = require('mongoose');
var methodOverride = require('method-override');


var db = require('./config/db');
var port = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));


require('./app/routes')(app);


mongoose.connect(db.url, function(err, res){
  if(err){
    console.log("Error: conecting to Database." + err);
  }
  app.listen(port, function(){
      console.log('Server running  -> go to localhost:' + port);
  });

});

exports = module.exports = app;
