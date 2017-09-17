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
    area:{
      type: String
    },
    training:{
      type: String
    },
    site: {
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
    coordinates:{
      type: Object
    },
  }
);

module.exports = training;