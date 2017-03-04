var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
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

app.use('/', index);
app.use('/users', users);

app.get('/getNewsList',function(req,res){
  res.send([{img:'/img/1.jpg',title:'幸福',content:'能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？'},
        {img:'/img/2.jpg',title:'幸福',content:'能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？'},
        {img:'/img/3.jpg',title:'幸福',content:'能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？'}])
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
