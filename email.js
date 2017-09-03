
const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://localhost/polarbear';
const connection = mongoose.connect(MONGO_URL);
const volunteer = require('../model/volunteer');
mongoose.connection.once('open', () => {
  volunteer.find({}).then((volunteerData)=>{

  });
});