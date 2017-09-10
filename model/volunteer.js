const mongoose = require('mongoose');
const volunteer = mongoose.model(
  "Volunteer",
  {
    volunteerId:{
      type: String,
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    phoneNumber:{
      type: String,
      required: true
    },
    password:{
      type: String,
      required: true
    },
    position:{
      type: String
    },
    birthDate:{
      type:String,
      required:true
    },
    email:{
      type: String,
      required: true
    },
    electionWorking: {
      type: String,
      required: true
    },
    positionId: {
      type: String
    },
    positionLocation: {
      type: String
    },
    positionName: {
      type: String
    },
    positionDescription: {
      type: String
    },
    positionShift: {
      type: String
    },
    positionMax: {
      type: String
    },
    positionCurrent: {
      type: String
    },
    trainingId: {
      type: String
    },
    trainingDate: {
      type: String
    },
    trainingTime: {
      type: String
    },
    trainingLocation: {
      type: String
    },
    trainingAddress: {
      type: String
    },
    trainingPoint: {
      type: String
    },
    trainingDescription: {
      type: String
    },
    workId: {
      type: String
    },
    workName: {
      type: String
    },
    workAddress: {
      type: String
    },
    workPoint: {
      type: String
    },
    didTraining:{
      type:String
    }
  }
);

module.exports = volunteer;