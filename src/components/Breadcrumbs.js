import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumbs extends Component {
	render() {
		return (
				<div>
					<nav className="navbar centered-nav">
						<ul className="nav navbar-nav">
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
					</nav>
				</div>
		);
	}
}

export default Breadcrumbs;