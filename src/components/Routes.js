import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Form from './Form';
import Position from '../containers/Position';
import MapLocations from '../containers/MapLocations';
import Contact from '../containers/Contact';

class Routes extends Component {
	render(){
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/form" component={Form}/>
					<Route path="/position" component={Position}/>
					<Route path="/locations" component={MapLocations}/>
					<Route path="/contact" component={Contact}/>
				</Switch>
			</main>
		)
	}
}

export default Routes