
const mongoose = require('mongoose');
const CONFIG = require('./config.json');
const connection = mongoose.connect(CONFIG.MONGO_URL);
const volunteer = require('../model/volunteer');
mongoose.connection.once('open', () => {
  volunteer.find({}).then((volunteerData)=>{

  });
});
