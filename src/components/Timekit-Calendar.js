import React, { Component } from 'react';
import TimekitBooking from 'timekit-booking';
import Livemap from '../components/Map';
require('jquery');

const widget = new TimekitBooking();

class TimekitCalendar extends Component{
	componentDidMount(){
		console.log(Livemap);
		console.log(document.getElementsByClassName("email"));
		widget.init({
			widgetId: '9c9f7906-99d7-4008-9719-e8bbb2044dd1',
			callbacks: {
			  findTimeStarted:          function(args)      { console.log('findTimeStarted', args); },
			  findTimeSuccessful:       function(response)  { console.log('findTimeSuccessful', response); },
			  findTimeFailed:           function(response)  { console.log('findTimeFailed', response); },
			  createBookingStarted:     function(args)      { console.log('createBookingStarted', args); },
			  createBookingSuccessful:  function(response)  { console.log('createBookingSuccessful', response); },
			  createBookingFailed:      function(response)  { console.log('createBookingFailed', response); },
			  getUserTimezoneStarted:   function(args)      { console.log('getUserTimezoneStarted', args); },
			  getUserTimezoneSuccesful: function(response)  { console.log('getUserTimezoneSuccesful', response); },
			  getUserTimezoneFailed:    function(response)  { console.log('getUserTimezoneFailed', response); },
			  fullCalendarInitialized:  function()          { console.log('fullCalendarInitialized'); },
			  renderCompleted:          function()          { console.log('renderCompleted'); },
			  showBookingPage:          function(slot)      { console.log('showBookingPage', slot); },
			  closeBookingPage:         function()          { console.log('closeBookingPage'); },
			  submitBookingForm:        function(values)    { console.log('submitBookingForm', values); }
			}
		});
		var divElem = document.createElement('DIV');
		divElem = widget;

		console.log(divElem);
		
	}

	render(){
		return (
			<div>Hello</div>
		);
	}
}

export default TimekitCalendar;