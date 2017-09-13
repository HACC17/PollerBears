import React, { Component } from 'react';
import Form from '../components/Form';
import Position from './Position';
import MapLocations from './MapLocations';

class Register extends Component {
	render(){
		return(
			<div>
				<Form/>
				<Position/>
				<MapLocations/>
			</div>
		)
	}
}

export default Register;