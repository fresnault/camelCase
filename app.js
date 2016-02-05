var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.get('/mobile', function (req, res) {
  res.sendfile('mobile/index.html');
});

app.get('/mobile?(/:code)', function (req, res) {
  res.sendfile('mobile/index.html');
});


var fs = require('fs')

var fileDb = null
var fileDbPath = "./database.json"

var database = { };


try{
  fileDb = require( fileDbPath )

  database = fileDb;
}catch(ex){
  database = {
    actors : {},
    movies : {}

  }
}

function saveDB(){

  console.log('Début de la savegarde');
  fs.writeFile(fileDbPath, JSON.stringify(database, null, 4),  function (err,data) {
    if (err) {
      return console.log(err);
    }

    console.log('Sauvegarde Terminée');
  });

}

//autosave toute les 5 minutes
var autoSave = setInterval(saveDB, 1000 * 60 * 5 );

app.get('/api/stats', (req,res) => {

  var bests = { 
    actors : null,
    movies : null
  };

  //actors
  var k = Object.keys(database.actors);

  var max = 0;
  for (var i=0; i < k.length; i++){
    if(database.actors[k[i]].count > max){
      max = database.actors[k[i]].count
      bests.actors = {
        id : k[i],
        name : database.actors[k[i]].name,
        score : max
      }
    }
  }


  //movies
  k = Object.keys(database.movies);

  max = 0;
  for (var i=0; i < k.length; i++){
    if(database.movies[k[i]].count > max){
      max = database.movies[k[i]].count
      bests.movies = {
        id : k[i],
        name : database.movies[k[i]].name,
        score : max
      }
    }
  }

  res.json( bests );
})

app.post('/api/stats', (req,res) => {
  var stat = req.body;

  if (database[stat.type]){
    
    if(database[stat.type][stat.id]){
      database[stat.type][stat.id].count += 1;
    }else{
      database[stat.type][stat.id] = {
        name : stat.name,
        count : 1
      };
    }

    res.json( {success : true} );

  }else{
    console.log('invalid type');
    res.json( {success : false} );
  }
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
