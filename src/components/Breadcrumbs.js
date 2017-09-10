import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumbs extends Component {
	render() {
		return (
				<div>
					<ul>
						<li>
							<Link to="/position">Position</Link>
						</li>
						<li>
							<Link to="/Locations">Locations</Link>
						</li>
						<li>
							<Link to="/form">Register</Link>
						</li>
					</ul>
				</div>
		);
	}
}

export default Breadcrumbs;