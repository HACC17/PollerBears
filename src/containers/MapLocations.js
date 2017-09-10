import React, { Component } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import MapLeaf from '../components/Map';

class MapLocations extends Component {
	constructor(props){
		super(props);
		this.state={
			selectedTraining: '',
			tableRow: 3,
			tableCol: 3,
			locations: [{
				name: 'Training 1',
				address: 'Aloha State',
				times: '9:00am - 12:00pm'
			}, {
				name: 'Training 2',
				address: 'Sunshine State',
				times: '6:00pm - 8:00pm'
			}]	
		};
		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleOptionChange (e){
		this.setState({selectedTraining: e.target.value});
		console.log(e.target.value);
	}

	handleFormSubmit(submit){
		submit.preventDefault();
		console.log('You signed up for', this.state.selectedTraining);
	}

	render(){
		let loc = this.state.locations;
		let info = [];
		let infoValue;
		let infoBlocks;
		let times = [];
		let locArr = loc.map(function(data){
			let dataArr = [data];
			for (var keyValue in dataArr){
				infoValue = dataArr[keyValue];
				infoBlocks = [infoValue.name, infoValue.address, infoValue.times].join(' ');
				times.push(infoValue.times);
			}
			return infoBlocks;
		});

		for (var trainings in locArr){
			let signUps = <div className="loc-info" key={trainings}>
											{locArr[trainings]}
											<div className="radio">
												<label>
													<input type="radio" value={times[trainings]}
														checked={this.state.selectedTraining===times[trainings]} 
														onChange={this.handleOptionChange}
														/>
													{times[trainings]}
												</label>
											</div>
										</div>;
			info.push(signUps);
		}
			
		return(
			<div>
				<div>
					<Breadcrumbs/>
				</div>
				What part of the island do you want to be trained at?
				<div className="MapLocations-container">
					MAP GOES HERE
					<MapLeaf />
					<div>
						District: <br/>
						Place
					</div>
					<div className="location-list">
						Name:
						Address:
						Times:
					</div>
					<div className="signup-form">
						<form onSubmit={this.handleFormSubmit}>
							{info}
							<button type="submit">Sign Up</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default MapLocations;