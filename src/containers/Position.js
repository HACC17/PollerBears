import React, { Component } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import PositionDescriptions from '../components/PositionDescriptions';

class Position extends Component {
	render(){
		return(
			<div className="position-container col-lg-12">
				<h2 className="section-heading">Select A Volunteer Position</h2>
					<PositionDescriptions/>
			</div>
		);
	}
}

export default Position;