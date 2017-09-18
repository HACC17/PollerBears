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
  time: '',
  training: '',
  district: ''
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
      return {...state}
    case 'SET_POSITION':
      state.position = action.position;
      return {...state,
        position: action.position
      }
      break;
    case 'SET_TIME':
      state.time = action.time;
      return {...state,
        time: action.time
      }
      break;
    case 'SET_TRAINING':
      state.training = action.training;
      return {...state,
        training: action.training
    }
      break;
    case 'SET_DISTRICT':
      state.district = action.district;
      return {...state,
        district: action.district
    }
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

export const changePos = (pos) => {
  return dispatch => {
    dispatch({
      type: "SET_POSITION",
      position: pos
    })
  }
}

export function positionData(state = [], action) {
    switch (action.type) {
        case 'POSITIONS_FETCH_DATA_SUCCESS':
            return action.items;
        default:
            return state;
    }
}

export function trainingData(state = [], action) {
    switch (action.type) {
        case 'TRAININGS_FETCH_DATA_SUCCESS':
            return action.items;
        default:
            return state;
    }
}

export const changeTime = (time) => {
  return dispatch => {
    dispatch({
      type: "SET_TIME",
      time: time
    })
  }
}

export const changeTraining = (training) => {
  return dispatch => {
    dispatch({
      type: "SET_TRAINING",
      training: training
    })
  }
}

export const changeDistrict = (district) => {
  return dispatch => {
    dispatch({
      type: 'SET_DISTRICT',
      district: district
    })
  }
}

export default combineReducers({
  routing: routerReducer,
  form,
  positionData,
  trainingData
})