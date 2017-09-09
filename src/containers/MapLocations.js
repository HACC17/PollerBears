import React, { Component } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

class MapLocations extends Component {
	constructor(props){
		super(props);
		this.state={
			selectedTraining: 'option1',
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
		let locArr = loc.map(function(data){
			let dataArr = [data];
			for (var keyValue in dataArr){
				infoValue = dataArr[keyValue];
				infoBlocks = [infoValue.name, infoValue.address, infoValue.times].join(' ');
			}
			return infoBlocks;
		});

		for (var trainings in locArr){
			info.push(<div className="loc-info" key={trainings}>{locArr[trainings]}</div>);
		}
			
		return(
			<div>
				<div>
					<Breadcrumbs/>
				</div>
				What part of the island do you want to be trained at?
				<div className="MapLocations-container">
					MAP GOES HERE
					<div>
						District: <br/>
						Place
					</div>
					<div className="location-list">
						{info}
						Name:
						Address:
						Times:
					</div>
					<div className="signup-form">
						<form onSubmit={this.handleFormSubmit}>
							<div className="radio">
								<label>
									<input type="radio" value="option1" 
										checked={this.state.selectedTraining==='option1'}
										onChange={this.handleOptionChange}
										/>
									Option 1
								</label>
							</div>
							<div className="radio">
								<label>
									<input type="radio" value="option2" 
										checked={this.state.selectedTraining==='option2'}
										onChange={this.handleOptionChange}
										/>
									Option 2
								</label>
							</div>
							<div className="radio">
								<label>
									<input type="radio" value="option3" 
									checked={this.state.selectedTraining==='option3'}
									onChange={this.handleOptionChange}
									/>
									Option 3
								</label>
							</div>
							<button type="submit">Sign Up</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default MapLocations;