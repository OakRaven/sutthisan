'use strict';

var express = require('express');
var app = express.createServer();
var redis = require('redis').createClient();
// var client = redis.createClient();
var conf = require('nconfs').load();
var settings = require('./settings')(app, conf, module.exports, express);

// If redis is enabled, create a client connection.
// if (conf.get('redis')) {
//   redis.select(app.get('redis'), function(errDb, res) {
//     console.log(process.env.NODE_ENV || 'dev' + ' database connection status: ', res);
//   });
// }

app.listen(conf.get('port'));
console.log('Listening on port ' + conf.get('port'));

// A simple index page you can customize. This should be where you put your
// app's HTML and script includes. See the example page in views/index.ejs.
app.get('/', function(req, res) {
  // Template context; put any variables you want to access in your template
  // in this object.
  var context = {
    title: undefined
  };

  // Render the index template and send it to the browser.
  res.render('index', context);
});

exports.app = app;
