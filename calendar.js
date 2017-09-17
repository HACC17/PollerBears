// Booking.js still needs access to jquery, so make sure its available
require('jquery');
// Pull in the module, ES2015 imports also works:
// import TimekitBooking from 'timekit-booking'
var TimekitBooking = require('timekit-booking');
// Booking.js is now available as local var TimekitBooking instead of global window.timekitBooking
var widget = new TimekitBooking();
console.log(widget);