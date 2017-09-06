
const mongoose = require('mongoose');
const CONFIG = require('./config.json');
const connection = mongoose.connect(CONFIG.MONGO_URL);
const volunteer = require('./model/volunteer');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var confirmationMail = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Confirm volunteer date and location',
  text: 'That was easy!'
};



mongoose.connection.once('open', () => {
  volunteer.find({}).then((volunteerData)=>{
    for(var i = 0; i < volunteerData.length; i++)
    {
      var email = volunteerData[i].email;
      var reminderMail = {
        from: 'youremail@gmail.com',
        to: email,
        subject: "Reminder for election",
        text: "Dear " + volunteerData[i].firstName
        + " , this is a email to remind you that you are scheduled to volunteer "+
        volunteerData[i].electionAvailable
      };
      console.log(reminderMail.text);
    }

    // transporter.sendMail(reminder, function(error, info){
    //   if (error) {
    //     console.log(error);
    //   }
    //   else {
    //     console.log('Email sent: ' + info.response);
    //   }
    // });
  });
});
