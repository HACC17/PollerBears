import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
const initialState = {
  email: 'test',
  password: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  birthDate:'',
  electionWorking: '',
  city: '',
  zip: '',
  mailingAddress: '',
  position: '',
  time: ''
};


const form = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FORM':
      state.email = action.email
      state.password = action.password
      state.firstName = action.firstName
      state.lastName = action.lastName
      state.phoneNumber = action.phoneNumber
      state.birthDate = action.birthDate
      state.electionWorking = action.electionWorking
      state.city = action.city
      state.zip = action.zip
      state.mailingAddress = action.mailingAddress
      console.log(state.city);
      console.log(state.zip);
      return "Data set";
    case 'SET_POSITION':
      state.position = action.position;
      break;
    case 'SET_TIME':
      state.time = action.time
      break;
    default:
      return state;
  }
}

export const changeForm = (data) => {
  return dispatch => {
    dispatch({
      type: "SET_FORM",
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      birthDate: data.birthDate,
      electionWorking: data.electionWorking,
      city: data.city,
      zip: data.zip,
      mailingAddress: data.mailingAddress
    })
  }
}


export const getData = (data) => {
  return dispatch => {
    dispatch({
      type: "RETURN_DATA"
    })
  }
}

export default combineReducers({
  routing: routerReducer,
  form
})