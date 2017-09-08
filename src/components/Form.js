import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import '../Form.css';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      formErrors: {email: '', password: '', firstName: '', lastName: '', phoneNumber: ''},
      emailValid: false,
      firstNameValid: false,
      lastNameValid: false,
      phoneNumberValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
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
          <input type="email" required className="form-control" name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
        
        <div className={`form-group ${this.errorClass(this.state.formErrors.firstName)}`}>
          <label htmlFor="firstName">First Name</label>
          <input type="firstName" required className="form-control" name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.lastName)}`}>
          <label htmlFor="lastNameValid">Last Name</label>
          <input type="lastName" required className="form-control" name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.phoneNumber)}`}>
          <label htmlFor="phoneNumberValid">Phone Number</label>
          <input type="phoneNumber" required className="form-control" name="phoneNumber"
            placeholder="1-(555)-555-5555"
            value={this.state.phoneNumber}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}  />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
      </form>
    )
  }
}

export default Form;
