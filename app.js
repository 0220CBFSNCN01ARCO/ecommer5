var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var morgan = require('morgan'); // muestra por consola las peticiones que van llegando.
var methodOverride = require("method-override");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require("./routes/admin");
var productRouter = require('./routes/product');
var contactRouter = require('./routes/contact');
var nosotrosRouter = require('./routes/nosotros');
var promocionesRouter = require('./routes/promociones');
var shippingRouter = require('./routes/shipping');
var recordameMiddleware = require('./middleware/recordameMiddleware');
var apiUsuariosRouter = require('./routes/api/usuarios');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 app.use(session({secret: 'MercadoLibroSession', resave: true, saveUninitialized: true}))
app.use(recordameMiddleware);
app.use(morgan('dev')); // parametro dev es para que nos muestre un determinado tipo de mensaje por consola. 
app.use(methodOverride("_method"));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/products', productRouter);
app.use("/contact", contactRouter);
app.use("/nosotros", nosotrosRouter);
app.use("/shipping", shippingRouter);
app.use("/promociones", promocionesRouter);
app.use('/api/users', apiUsuariosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
