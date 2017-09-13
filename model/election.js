const mongoose = require('mongoose');
const election = mongoose.model(
  "Election",
  {
    electionId:{
      type: String
    },
    day:{
      type: String,
    },
    date:{
      type: String,
    },
    county:{
      type: String
    },
    trainingPosition: {
      type: String
    },
    trainingLocation: {
      type: String
    },
    address:{
      type: String,
      required: true
    },
    city:{
      type: String
    },
    zip:{
      type: String
    },
    timeTraining:{
      type: String
    },
    addressbyRegion:{
      type: String
    },
    district:{
      type: String,
      required: true
    },
    site:{
      type: String,
      required: true
    }
  }
);

module.exports = election;