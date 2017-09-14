import React, { Component } from 'react';
import $ from 'jquery'; 
import './jssocials.js';
import './jssocials.min.js';
import './jssocials.css';


class JSSocial extends Component{
	componentDidMount(){
		$(document).ready(function(){
			console.log($("shareIconsCountInside"));
			$("#shareIconsCountInside").jsSocials({
			    url: "http://www.google.com",
			    text: "I'm volunteering with Office of Elections!",
			    showLabel: false,
			    showCount: "inside",
			    shareIn: "popup",
			    shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest"]
			});
		})
	}

	render(){
		return (
			<div id="shareIconsCountInside">Hello</div>
		);
	}
}

export default JSSocial;