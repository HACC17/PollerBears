const mongoose = require('mongoose');
const election = mongoose.model(
  "Election",
  {
    electionId:{
      type: String,
      required: true
    },
    day:{
      type: String,
      required: true
    },
    date:{
      type: String,
      required: true
    },
    county:{
      type: String,
      required: true
    },
    trainingPosition: {
      type: String,
      required: true
    },
    trainingLocation: {
      type: String,
      required: true
    },
    address:{
      type: String,
      required: true
    },
    city:{
      type: String,
      required: true
    },
    zip:{
      type: String,
      required: true
    },
    timeTraining:{
      type: String,
      required: true
    },
    addressbyRegion:{
      type: String
    }
  }
);

module.exports = election;