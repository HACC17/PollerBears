const mongoose = require('mongoose');
const training = mongoose.model(
  "Training",
  {
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
      type: String
    },
    city:{
      type: String
    },
    zip:{
      type: String
    },
    time:{
      type: String
    },
    district:{
      type: String
    },
  }
);

module.exports = training;