import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Form from './Form';
import Position from '../containers/Position';
import App from '../App';

class Routes extends Component {
	render(){
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/form" component={Form}/>
					<Route path="/position" component={Position}/>
				</Switch>
			</main>
		)
	}
}

export default Routes