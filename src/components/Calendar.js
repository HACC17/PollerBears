import React from 'react';
import AddToCalendar from 'react-add-to-calendar';
import $ from 'jquery'; 
let icon = { 'calendar-plus-o': 'left' };
let event = {
  title: 'Sample Event',
  description: 'This is the sample event provided as an example only',
  location: 'Portland, OR',
  startTime: '2016-09-16T20:15:00-04:00',
  endTime: '2016-09-16T21:45:00-04:00'
}

class ExampleCalendar extends React.Component {

  render() {
	$(document).ready(function(){
		let from,to,subject,text;
		$("#send_email").click(function(){      
			to=$("#to").val();
			subject="Thank you for volunteering with Office of Elections";
			text="You have volunteered at...";
			$("#message").text("Sending E-mail...Please wait");
			$.get("http://localhost:13001/send",{to:to,subject:subject,text:text},function(data){
			if(data=="sent")
			{
			    $("#message").empty().html("Email is been sent at "+to+" . Please check inbox!");
			}
			});
		});
	});
    return <AddToCalendar
   event={event}
   buttonTemplate={icon} />;
  };
}

export default ExampleCalendar;
