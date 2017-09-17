import React, { Component } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import MapLeaf from '../components/Map';
import { changeTime, getData} from '../reducers/'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'
// import TimekitCalendar from '../components/Timekit-Calendar';
// import ExampleCalendar from '../components/Calendar';

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
				date: 'February 21, 2018',
				times: '9:00am - 12:00pm'
			}, {
				name: 'Training 2',
				address: 'Sunshine State',
				date: 'March 2, 2018',
				times: '6:00pm - 8:00pm'
			},{
				name: 'Training 3',
				address: 'Aloha State',
				date: 'June 14, 2018',
				times: '6:30pm - 8:00pm'
			},{
				name: 'Training 4',
				address: 'Sunshine State',
				date: 'June 16, 2018',
				times: '9:00am - 10:30am'
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
    this.props.changeTime(this.state.selectedTraining);
      axios.post("http://localhost:3001/volunteer", {
        email: this.props.form.email,
        password: this.props.form.password,
        firstName: this.props.form.firstName,
        lastName: this.props.form.lastName,
        phoneNumber: this.props.form.phoneNumber,
        birthDate: this.props.form.birthDate,
        electionWorking:this.props.form.electionWorking,
        city: this.props.form.city,
        zip: this.props.form.zip,
        mailingAddress: this.props.form.mailingAddress,
        position: this.props.form.position,
        trainingTime: this.props.form.time,
        trainingLocation: this.props.form.training,
        district: this.props.form.district
      });
    console.log("Sumbitted Form");
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
				console.log('infoVal', infoValue);
				infoBlocks = [infoValue.name, infoValue.address, infoValue.date, infoValue.times].join(' ');
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
			<div className="location-container col-lg-12">
				<h2 className="section-heading">Select A Volunteer Site</h2>
				<div className="MapLocations-container">
					<MapLeaf />
					<div>
					</div>
					<div className="location-list">
						Name: Address: Date: Times:
					</div>
					<div className="signup-form">
						<form onSubmit={this.handleFormSubmit}>
							{info}
							<button type="submit" className="btn btn-lg">Sign Up</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
  return {
    ...state
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changeTime,
  getData,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MapLocations)
