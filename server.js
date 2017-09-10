const express = require('express');
const mongoose = require('mongoose');
const CONFIG = require('./config.json');
const connection = mongoose.connect(CONFIG.MONGO_URL);
const app = require('./app');
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
 res.setHeader(`Access-Control-Allow-Origin`,'*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers',
  'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

mongoose.connection.once('open', function() {
  console.log('connected');

  var server = app.listen(3001, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening on',host, port);
  });
});