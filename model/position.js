const mongoose = require('mongoose');
const position = mongoose.model(
  "Position",
  {
    position:{
      type: String
    },
    volunteerSite:{
      type: String
    },
    volunteerCount:{
      type: String
    },
    trainingNeeded:{
      type: String
    }
  }
);

module.exports = position;