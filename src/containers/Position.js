import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import Breadcrumbs from '../components/Breadcrumbs';

class Position extends Component {
	render(){
		return(
			<div>
				<div>
					<Breadcrumbs/>
				</div>
				<div className="position-container">
					<h1>Pick a position you want to volunteer for</h1>
				</div>
			</div>
		);
	}
}

export default Position;