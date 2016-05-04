var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var router = require('./routes');

var expshbs = require('express-handlebars');

var app = express();

app.set('views', path.join(__dirname, 'templates'));

app.engine('.hbs', expshbs({
    defaultLayout: 'index',
    partialsDir: [
      'templates/partials'
    ],
    layoutsDir: 'templates/layouts',
    extname: '.hbs',
    })
  );
app.set('view engine', '.hbs')

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/assets', express.static('ui'));

app.use('/', router);

app.listen(process.env.PORT || 3456)

module.exports = app;
