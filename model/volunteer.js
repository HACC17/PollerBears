const mongoose = require('mongoose');
const volunteer = mongoose.model(
  "Volunteer",
  {
    volunteerId:{
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phone:{
      type: String,
    },
    position:{
      type: String,
    },
    email:{
      type: String,
      required: true
    },
    electionWorking: {
      type: String,
    },
    positionId: {
      type: String,
    },
    positionLocation: {
      type: String,
    },
    positionName: {
      type: String,
    },
    positionDescription: {
      type: String,
    },
    positionShift: {
      type: String,
    },
    positionMax: {
      type: String,
    },
    positionCurrent: {
      type: String,
    },
    trainingId: {
      type: String,
    },
    trainingDate: {
      type: String,
    },
    trainingTime: {
      type: String,
    },
    trainingLocation: {
      type: String,
    },
    trainingAddress: {
      type: String,
    },
    trainingPoint: {
      type: String,
    },
    trainingDescription: {
      type: String,
    },
    workId: {
      type: String,
    },
    workName: {
      type: String,
    },
    workAddress: {
      type: String,
    },
    workPoint: {
      type: String,
    }
    didTraining:{
      type:String,
    }
  }
);

module.exports = volunteer;