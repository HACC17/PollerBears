const express = require('express');
const app = express();
const volunteer = require('./model/volunteer');
const election = require('./model/election');
const training = require('./model/training');
const position = require('./model/position');
const bodyParser = require('body-parser');
const passwordHash = require('password-hash');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(function(req, res, next) {
 res.setHeader(`Access-Control-Allow-Origin`,'http://localhost:3000');
 res.setHeader('Access-Control-Allow-Credentials', true);
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers',
  'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 next();
});
app.get('/volunteer', (req, res) =>{
  volunteer
  .find({})
  .then(results => res.json(results));
});

app.get('/volunteer/', (req, res) =>{
  volunteer
  .find({})
  .then(results => res.json(results));
});



app.post('/volunteer', (req, res) =>{
  const person =  new volunteer({
    //name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    position: req.body.position,
    electionWorking: req.body.electionWorking,
    // positionId: req.body.positionId,
    // positionLocation: req.body.positionLocation,
    // positionName: req.body.positionName,
    // positionDescription: req.body.positionDescription,
    // positionShift: req.body.positionShift,
    // positionMax: req.body.positionMax,
    // positionCurrent: req.body.positionCurrent,
    // trainingId: req.body.trainingId,
    // trainingDate: req.body.trainingDate,
    trainingTime: req.body.trainingTime,
    trainingLocation: req.body.trainingLocation,
    // trainingAddress: req.body.trainingAddress,
    // trainingPoint: req.body.trainingPoint,
    // trainingDescription: req.body.trainingDescription,
    // workId: req.body.workId,
    // workName: req.body.workName,
    // workAddress: req.body.workAddress,
    // workPoint: req.body.workPoint,
    // didTraining: req.body.didTraining,
    volunteerId: req.body.volunteerId,
    email: req.body.email,
    //electionAvailable: req.body.electionAvailable
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthDate: req.body.birthDate,
    password: passwordHash.generate(req.body.password),
    zip: req.body.zip,
    mailingAddress: req.body.mailingAddress,
    city: req.body.city,
    district: req.body.district
  });
  return person.save()
  .then(result => {res.json(req.body);})
  .catch(err => {
    const errors = err.errors;
    for(let property in errors){
      console.log(errors[property].message);
    }
  });
});

app.get('/election', (req, res) =>{
  election
  .find({})
  .then(results => res.json(results));
});


app.get('/training', (req, res) =>{
  training
  .find({})
  .then(results => res.json(results));
});

app.get('/position', (req, res) =>{
  position
  .find({})
  .then(results => res.json(results));
});

app.get('/positionCapitol', (req, res) =>{
  position
  .find({volunteerSite: "State Capitol"})
  .then(results => res.json(results));
});

app.get('/positionNone', (req, res) =>{
  position
  .find({volunteerSite: "none"})
  .then(results => res.json(results));
});
app.post('/election', (req, res) =>{
  const voterElection =  new election({
    electionId: req.body.electionId,
    name: req.body.name,
    date: req.body.date,
    address: req.body.address,
    day: req.body.day,
    county: req.body.county,
    address: req.body.address,
    city: req.body.city,
    zip: req.body.zip,
    timeTraining: req.body.timeTraining,
    addressbyRegion: req.body.addressbyRegion
  });

  return voterElection.save()
  .then(result => {res.json(req.body);})
  .catch(err => {
    const errors = err.errors;
    for(let property in errors){
      console.log(errors[poperty].message);
    }
  });
});


module.exports = app;
