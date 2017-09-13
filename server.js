const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const CONFIG = require('./config.json');
const fs = require('fs');
const connection = mongoose.connect(CONFIG.MONGO_URL);
const app = require('./app');
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'public')));

mongoose.connection.once('open', function() {
  console.log('connected');

  var server = app.listen(3001, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening on',host, port);
  });
});

/*------------------SMTP Start-----------------------------*/
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: process.env.SMTP_LOGIN,
        pass: process.env.SMTP_PASSW
    }
});
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

app.get('/',function(req,res){
  res.sendfile('Map.js');
});

app.get('/send',function(req,res){
  var mailOptions={
      from: "PollerBears <fsgcodedummy@gmail.com",
      to : req.query.to,
      subject : req.query.subject,
      text : req.query.text,
      html: '<b> Testing </b>'
  }
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response){
   if(error){
          console.log(error);
      res.end("error");
   }else{
          console.log("Message sent: " + response.message);
      res.end("sent");
       }
  });
});

app.listen(8000,function(){
    console.log("Express Started on Port 8000");
});