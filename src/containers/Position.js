import React, { Component } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import PositionDescriptions from '../components/PositionDescriptions';

class Position extends Component {
	render(){
		return(
			<div>
				<div>
					<Breadcrumbs/>
				</div>
				<div>
				</div>
				<div className="position-container">
					<h1>Pick a position you want to volunteer for</h1>
					<div className="position-info">
						<div className="circle">
							Position Descriptions
							<PositionDescriptions/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Position;