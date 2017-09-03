const express = require('express');
const app = express();
const volunteer = require('./model/volunteer');
const election = require('./model/election');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });

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
    volunteerId: req.body.volunteerId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthDate: req.body.birthDate,
    MI:req.body.MI,
    AKA:req.body.AKA,
    SSN:req.body.SSN,
    homePhone:req.body.homePhone,
    cellPhone:req.body.cellPhone,
    workPhone:req.body.workPhone,
    bestTime:req.body.bestTime,
    about:req.body.about,
    addressOne: req.body.addressOne,
    email: req.body.email,
    electionAvailable: req.body.electionAvailable
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

app.post('/election', (req, res) =>{
  const voterElection =  new election({
    electionId: req.body.electionId,
    name: req.body.name,
    date: req.body.date,
    address: req.body.address
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