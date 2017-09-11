const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const CONFIG = require('./config.json');
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

/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "sgcodedummy@gmail.com",
        pass: "ch0tr1b3"
    }
});
app.get('/',function(req,res){
    res.sendfile('index.html');
});
app.get('/send',function(req,res){
    var mailOptions={
        to : req.query.to,
        subject : req.query.subject,
        text : req.query.text
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