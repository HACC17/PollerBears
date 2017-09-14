const mongoose = require('mongoose');
const volunteer = require('./model/volunteer');
const election = require('./model/election');
const training = require('./model/training');
const CONFIG = require('./config.json');
const bluebird = require('bluebird');
const connection = mongoose.connect(CONFIG.MONGO_URL);
const csv = require('fast-csv');
var electionData = [];
var trainingData = [];

csv
 .fromPath("./csv/sites.csv")
 .on("data", function(data){
  electionData.push({
    district:data[0],
    site:data[1],
    address:data[2]});
});

csv
 .fromPath("./csv/training.csv")
 .on("data", function(data){
  trainingData.push({
    day: data[0],
    date: data[1],
    county: data[2],
    position: data[3],
    location: data[4],
    address: data[5],
    city: data[6],
    zip: data[7],
    time: data[8],
    district: data[9]
  });
});
mongoose.connection.once('open', function() {
  Promise.all([
  election.insertMany(electionData.map((element, index, array) =>{
    return {
      district: element.district,
      site:element.site,
      address: element.address
    }
  })),
  training.insertMany(trainingData.map((element, index, array) =>{
    return {
      day: element.day,
      date: element.date,
      county: element.county,
      position: element.position,
      location: element.location,
      address: element.address,
      city: element.city,
      zip: element.zip,
      time: element.time,
      district: element.district
    }
  }))
  ])
  .then(function() {
    mongoose.connection.close();
  });
});
