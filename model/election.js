const mongoose = require('mongoose');
const election = mongoose.model(
  "Election",
  {
    electionId:{
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    date:{
      type: String,
      required: true
    },
    address:{
      type: String,
      required: true
    }
  }
);

module.exports = election;