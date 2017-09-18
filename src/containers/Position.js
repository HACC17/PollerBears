import React, { Component } from 'react';
import PositionDescriptions from '../components/PositionDescriptions';

class Position extends Component {
	render(){
		return(
			<div className="position-container col-lg-12">
				<h2 className="section-heading"><i className="fa fa-users" aria-hidden="true"></i> Select A Volunteer Position</h2>
					<PositionDescriptions/>
			</div>
		);
	}
}

export default Position;