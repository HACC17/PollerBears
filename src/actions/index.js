import axios from 'axios';

export const setForm = (data) => ({
  type: 'SET_FORM',
  email: data.email,
  password: data.password,
  firstName: data.firstName,
  lastName: data.lastName,
  phoneNumber: data.phoneNumber,
  birthDate: data.birthDate,
  electionWorking: data.electionWorking,
  city: data.city,
  zip: data.zip,
  mailingAddress: data.mailingAddress,
});

export const setPosition = (position) => ({
  type: 'SET_POSITION',
  position: position
});

export function positionsFetchDataSuccess(items) {
    return {
        type: 'POSITIONS_FETCH_DATA_SUCCESS',
        items
    };
}

export function fetchPositions(url){
  return (dispatch) => {
    return axios.get(url)
      .then(response => {
        dispatch(positionsFetchDataSuccess(response.data))
      })
      .then((items) => dispatch(fetchPositions(items)));
  };
}

export function trainingsFetchDataSuccess(items) {
    return {
        type: 'TRAININGS_FETCH_DATA_SUCCESS',
        items
    };
}

export function fetchTrainings(url){
  return (dispatch) => {
    return axios.get(url)
      .then(response => {
        dispatch(trainingsFetchDataSuccess(response.data))
      })
      .then((items) => dispatch(fetchTrainings(items)));
  };
}


export const setTime = (time) => ({
  type: 'SET_TIME',
  position: time
});

export const returnData = (data) => ({
  type: 'RETURN_DATA',
  data
});