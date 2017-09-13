const mongoose = require('mongoose');
const volunteer = require('./model/volunteer');
const election = require('./model/election');
const CONFIG = require('./config.json');
const connection = mongoose.connect(CONFIG.MONGO_URL);
const csv = require('fast-csv');
var sendData = [];

csv
 .fromPath("sites.csv")
 .on("data", function(data){
  sendData.push({district:data[0],
    site: data[1],
    address: data[2]});
 });
    mongoose.connection.once('open', function() {
        election.insertMany(sendData.map((element, index, array) =>{
          return {
            district: element.district,
            site:element.site,
            address: element.address
          }
        }))
      .then(function() {
        mongoose.connection.close();
      });
    });
