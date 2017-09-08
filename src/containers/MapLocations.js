import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

class MapLocations extends Component {
	render(){
		return(
			<div>
				<div>
					<Breadcrumbs/>
				</div>
				What part of the island do you want to be trained at?
				<div className="MapLocations-container">
					MAP GOES HERE
				</div>
			</div>
		);
	}
}

export default MapLocations;