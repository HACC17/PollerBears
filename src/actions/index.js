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

export const setTime = (time) => ({
  type: 'SET_TIME',
  position: time
});

export const returnData = (data) => ({
  type: 'RETURN_DATA',
  data
});