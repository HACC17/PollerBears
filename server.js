const express = require('express');
const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://localhost/pollerbears';
const connection = mongoose.connect(MONGO_URL);
const app = require('./app');

mongoose.connection.once('open', function() {
  console.log('connected');

  var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening on',host, port);
  });
});

