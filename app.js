var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("dotenv").config();
var mongo=require('./connection')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var foodRouter = require('./routes/food')
var lightRouter = require('./routes/light')
var plantRouter = require('./routes/plant')
var paymentRouter= require ("./routes/payment")
var userRoutes = require("./routes/userRoutes")
// var categoriesRouter = require('./routes/catagories')


var cors = require('cors')
var app = express();


mongo.connect()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/categories',categoriesRouter)
// app.use('/auth',authRouter)
app.use('/plant',plantRouter)
app.use('/light',lightRouter)
app.use('/food',foodRouter)

app.use('/payment',paymentRouter)
app.use("/users", userRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


console.log(process.env.PORT)
console.log(process.env.MONGODB_URL)

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
