var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("./app_server/model/db");

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 404 Error handling
app.use((req, res, next) => {
  res.status(404);
  res.render('error', { title: '404: Not Found', message: 'Page not found!' }); // Added message for 404
});

// Log all requests
app.use((req, res, next) => {
  console.log(`Received request for: ${req.url}`);
  next();
});

// General error handling
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(err.status || 500);
  res.render('error', {
    title: 'Error',
    message: err.message || 'Something went wrong!', // Use the error message if available
    error: err // Pass the error object to the view
  });
});


module.exports = app;
