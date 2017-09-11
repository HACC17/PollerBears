import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import '../Form.css';
import axios from 'axios';

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
      formErrors: {email: '', password: '', firstName: '', lastName: '', phoneNumber: ''},
      emailValid: false,
      firstNameValid: false,
      lastNameValid: false,
      phoneNumberValid: false,
      passwordValid: false,
      formValid: false
    }
    this.formSubmit = this.formSubmit.bind(this);
    this.electionSelection = this.electionSelection.bind(this);
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }
  formSubmit() {
      axios.post("http://localhost:3001/volunteer", {
             email:this.state.email,
             firstName:this.state.firstName,
             lastName: this.state.lastName,
             phoneNumber: this.state.phoneNumber,
             password: this.state.password,
             birthDate: this.state.birthDate,
             electionWorking: this.state.electionWorking
           })
    .then(res => {
      console.log("Hello");
    })
    .catch(err => {
      console.error(err);
    });
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
    console.log(e.target.value);
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <form className="demoForm">
        <h2>Sign up</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="email" required className="form-control" name="email" id="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.firstName)}`}>
          <label htmlFor="firstName">First Name</label>
          <input type="firstName" required className="form-control" name="firstName" id="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.lastName)}`}>
          <label htmlFor="lastNameValid">Last Name</label>
          <input type="lastName" required className="form-control" name="lastName" id="lastNameValid"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.phoneNumber)}`}>
          <label htmlFor="phoneNumberValid">Phone Number</label>
          <input type="phoneNumber" required className="form-control" name="phoneNumber" id="phoneNumberValid"
            placeholder="1-(555)-555-5555"
            value={this.state.phoneNumber}
            onChange={this.handleUserInput}  />
        </div>
        <div>
          <label htmlFor="birthDateValid">Birth Date</label>
          <input type="birthDate" required className="form-control" name="birthDate" id="birthDateValid"
            placeholder="MM/DD/YYYY"
            value={this.state.birthDate}
            onChange={this.handleUserInput}
          />
        </div>
        <div>
          Election<br/>
           <label>
          <input type="radio" value="Primary"
            checked={this.state.electionWorking==='Primary'}
            onChange={this.electionSelection}
          />Primary</label>
          <label>
          <input type="radio" value="General"
            checked={this.state.electionWorking==="General"}
            onChange={this.electionSelection}
          /> General</label>
          <label>
          <input type="radio" value="Both"
            checked={this.state.electionWorking==="Both"}
            onChange={this.electionSelection}
          /> Both</label>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" id="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}  />
        </div>
        <button onClick={this.formSubmit} className="btn btn-primary center-block" disabled={!this.state.formValid}>Sign up</button>
      </form>
    )
  }
}

export default Form;
