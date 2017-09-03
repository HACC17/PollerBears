const mongoose = require('mongoose');
const volunteer = mongoose.model(
  "Volunteer",
  {
    volunteerId:{
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    MI:{
      type: String,
    },
    AKA:{
      type: String,
    },
    SSN:{
      type: String,
    },
    birthDate:{
      type: String,
      required: true
    },
    homePhone:{
      type: String,
    },
    cellPhone:{
      type: String,
    },
    workPhone:{
      type: String,
    },
    bestTime:{
      type: String,
    },
    about:{
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true
    },
    electionAvailable: {
      type: String,
      required: true
    },

  }
);

module.exports = volunteer;