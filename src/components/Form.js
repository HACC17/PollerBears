import React, { Component } from 'react';
import MapLocations from '../containers/MapLocations';
import Position from '../containers/Position';
import Capitol from '../components/Capitol';
import Districts from '../components/Districts';
import $ from 'jquery';
import { FormErrors } from './FormErrors';
import '../Form.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './Routes';
import {Route, Redirect} from 'react-router';
import { changeForm, getData} from '../reducers/'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios';
const from = {}
let view;

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      birthDate:'',
      electionWorking: 'Primary',
      city:'',
      zip:'',
      mailingAddress:'',
      formErrors: {email: '', password: '', firstName: '', lastName: '', phoneNumber: ''},
      emailValid: false,
      firstNameValid: false,
      lastNameValid: false,
      phoneNumberValid: false,
      passwordValid: false,
      formValid: false,
      redirect: false
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.electionSelection = this.electionSelection.bind(this);
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }
  handleFormSubmit() {
    var data = {
      email:this.state.email,
      firstName:this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      birthDate: this.state.birthDate,
      electionWorking: this.state.electionWorking,
      zip: this.state.zip,
      city: this.state.city,
      mailingAddress: this.state.mailingAddress
    };
    this.props.changeForm(data);
    var sendData = {
      email: this.props.form.email,
      password: this.props.form.password,
      firstName: this.props.form.firstName,
      lastName: this.props.form.lastName,
      phoneNumber: this.props.form.phoneNumber,
      birthDate: this.props.form.birthDate,
      electionWorking: this.props.form.electionWorking,
      city: this.props.form.city,
      zip: this.props.form.zip,
      mailingAddress: this.props.form.mailingAddress,
      position: this.props.form.position,
      trainingTime: this.props.form.time,
      trainingLocation: this.props.form.training,
      district: this.props.form.district
    }
    axios.post("http://localhost:13001/volunteer", sendData);
    // return false;
    console.log(this.props.form);
    let from,to,subject,text;
    to=this.props.form.email;
    subject="You are making a difference!";
    text="Hello " + sendData.firstName + ",\n\nThank you for volunteering with Office of Elections.\n\nHere are the details of your event for the position: " + sendData.position + "\n" + this.props.form.training + "\n\nIf the information above is incorrect, please contact us and we will be happy to assist you.\n\nOtherwise, we are excited to have you on board with us!\n\nSincerely,\n\nOffice of Elections\n\nPhone: (808) 453-VOTE (8683)\nE-mail: elections@hawaii.gov\n";
    $.get("http://localhost:18000/send",{to:to,subject:subject,text:text},function(data){
      if(data=="sent")
      {
          $("#message").empty().html("Email is been sent at "+to+". Check your inbox and sign up for more trainings!");
      }
    });
    setTimeout(function () {
      window.location.replace("/");
    }, 10000);
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let phoneNumberValid = this.state.phoneNumberValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'firstName':
        firstNameValid = value.match(/^[a-zA-Z ]{2,30}$/);
        fieldValidationErrors.firstName = firstNameValid ? '' : ' is invalid';
        break;
      case 'lastName':
        lastNameValid = value.match(/^[a-zA-Z ]{2,30}$/);
        fieldValidationErrors.lastName = lastNameValid ? '' : ' is invalid';
        break;
      case 'phoneNumber':
        phoneNumberValid = value.match(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/);
        fieldValidationErrors.phoneNumber = phoneNumberValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    firstNameValid: firstNameValid,
                    lastNameValid: lastNameValid,
                    phoneNumberValid: phoneNumberValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.firstNameValid && this.state.passwordValid && this.state.lastNameValid && this.state.phoneNumberValid});
  }

  electionSelection(e){
    this.setState({electionWorking: e.target.value});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    if (this.props.form.position === "Control Center Operator" ||
        this.props.form.position === "Absentee Ballot Team Member" ||
        this.props.form.position === "Ballot Storage Team" ||
        this.props.form.position === "Computer Operations Team Member" ||
        this.props.form.position === "Duplication Team Member" ||
        this.props.form.position === "Manual Audit Team Member" ||
        this.props.form.position === "Official Observer Team Member" ||
        this.props.form.position === "Poll Book Audit Team Member" ||
        this.props.form.position === "Precinct Can Team Member" ||
        this.props.form.position === "Receiving Team Member" ||
        this.props.form.position === "Election Information Services Official"){
      view = <Capitol/>
    }else{
      view = <Districts/>
    }

    return (
      <div className="registration-container">
      <h1 className="reg-form-header">Register to Become an Election Day Official</h1>
      <div className="basic-info-container col-lg-12">
      <h2 className="section-heading"><i className="fa fa-address-card" aria-hidden="true"></i> Basic Details</h2>
      <form onSubmit={this.handleFormSubmit} className="demoForm">
        <div className="row">
          <div className={`form-group ${this.errorClass(this.state.formErrors.firstName)} col-md-6`}>
            <label htmlFor="firstName">First Name</label>
            <input type="firstName" required className="form-control" name="firstName" id="firstName"
              placeholder="Noelani"
              value={this.state.firstName}
              onChange={this.handleUserInput}  />
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.lastName)} col-md-6`}>
            <label htmlFor="lastNameValid">Last Name</label>
            <input type="lastName" required className="form-control" name="lastName" id="lastNameValid"
              placeholder="Shibuya"
              value={this.state.lastName}
              onChange={this.handleUserInput}  />
          </div>
        </div>
        <div className="row">
          <div className={`form-group ${this.errorClass(this.state.formErrors.phoneNumber)} col-md-6`}>
            <label htmlFor="phoneNumberValid">Phone Number</label>
            <input type="phoneNumber" required className="form-control" name="phoneNumber" id="phoneNumberValid"
              placeholder="(808)-555-5555"
              value={this.state.phoneNumber}
              onChange={this.handleUserInput}  />
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="birthDateValid">Birth Date</label>
              <input type="birthDate" required className="form-control" name="birthDate" id="birthDateValid"
                placeholder="MM/DD/YYYY"
                value={this.state.birthDate}
                onChange={this.handleUserInput}
              />
            </div>
          </div>
        </div>

        <div className="row">
            <div className={`form-group ${this.errorClass(this.state.formErrors.email)} col-md-6`}>
              <label htmlFor="email">Email Address</label>
              <input type="email" required className="form-control" name="email" id="email"
                placeholder="noelanishibuya@example.com"
                value={this.state.email}
                onChange={this.handleUserInput}  />
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.password)} col-md-6`}>
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" id="password"
                placeholder="example123!"
                value={this.state.password}
                onChange={this.handleUserInput}  />
            </div>
        </div>

        <div className="form-group">
          <label htmlFor="mailingAddress">Mailing Address</label>
          <input type="mailingAddress" className="form-control" name="mailingAddress" id="mailingAddress" placeholder="555 Oahu St."
            value={this.state.mailingAddress}
            onChange={this.handleUserInput}
          />
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="city">City</label>
            <input type="city" className="form-control" name="city" id="city" placeholder="Ex. Honolulu"
              value={this.state.city}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="zip">Zip Code</label>
              <input type="zip" className="form-control" name="zip" id="zip" placeholder="Ex. 96817"
                value={this.state.zip}
                onChange={this.handleUserInput}
              />
            </div>
          </div>
        </div>

        <h4>Which election do you want to volunteer for?</h4>
            <div className="radio election-choices">
                <ul className="radios">
                    <li>
                        <input type="radio" value="Primary" id="primary-election" className="optionsRadios"
                        checked={this.state.electionWorking==='Primary'}
                        onChange={this.electionSelection}
                        />
                        <label htmlFor="primary-election">Primary</label>
                    </li>
                    <li>
                        <input type="radio" value="General" id="general-election" className="optionsRadios"
                        checked={this.state.electionWorking==="General"}
                        onChange={this.electionSelection}
                        />
                        <label htmlFor="general-election">General</label>
                    </li>
                    <li>
                        <input type="radio" value="Both" id="both" className="optionsRadios"
                        checked={this.state.electionWorking==="Both"}
                        onChange={this.electionSelection}
                        />
                        <label htmlFor="both">Both</label>
                    </li>
                </ul>
            </div>
          </form>
          </div>
            <div>
              <div>
                <Position/>
                <MapLocations/>
                {view}
              </div>
            </div>
        <button type='button' onClick={this.handleFormSubmit} className="btn btn-lg center-block personalStyle submit-reg-btn" disabled={!this.state.formValid}>Sign up</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changeForm,
  getData,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form);
