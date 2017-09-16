import React, { Component } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import PositionDescriptions from '../components/PositionDescriptions';

class Position extends Component {
	render(){
		return(
			<div>
				<div>
				</div>
				<div className="position-container col-lg-12">
					<h2>Select A Volunteer Position</h2>
						<PositionDescriptions/>
				</div>
			</div>
		);
	}
}

export default Position;