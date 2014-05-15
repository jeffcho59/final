 express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

app.set('port', process.env.PORT || 3000);

mongoose.connect('mongodb://localhost/laptop');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');




app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));


if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/purchase', routes.purchase);
app.get('/quotes')


app.get('/addLaptop', routes.addLaptop);
app.post('/addLaptop', routes.addLaptop);
app.get('/getQuotes', routes.getQuotes);
app.post('/getQuotes', routes.getQuotes);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
