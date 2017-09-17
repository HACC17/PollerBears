import React, { Component } from 'react';
import Form from '../components/Form';
import Position from './Position';
import MapLocations from './MapLocations';
import Capitol from '../components/Capitol';
import Districts from '../components/Districts';

class Register extends Component {
	render(){
		return(
			<div>
				<Form/>
				<Position/>
				<MapLocations/>
				<Districts/>
			</div>
		)
	}
}

export default Register;