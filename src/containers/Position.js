import React, { Component } from 'react';
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
					<div className="position-info">
						<div className="circle">
						</div>
						Swag Master
						<div>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis exercitationem ducimus at tempora necessitatibus commodi soluta tempore. Blanditiis sunt aut eveniet ea iure. Praesentium autem eum cupiditate velit sed, architecto.
						</div>
					</div>
					<div className="position-info">
						<div className="circle">
						</div>
						Meme Researcher
						<div>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis exercitationem ducimus at tempora necessitatibus commodi soluta tempore. Blanditiis sunt aut eveniet ea iure. Praesentium autem eum cupiditate velit sed, architecto.
						</div>
					</div>
					<div className="position-info">
						<div className="circle">
						</div>
						Dirty Liberal
						<div>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis exercitationem ducimus at tempora necessitatibus commodi soluta tempore. Blanditiis sunt aut eveniet ea iure. Praesentium autem eum cupiditate velit sed, architecto.
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Position;