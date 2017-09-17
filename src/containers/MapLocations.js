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
		return(
			<div className="location-container col-lg-12">
				<h2 className="section-heading">Select A Volunteer Site</h2>
				<div className="MapLocations-container">
					<MapLeaf />
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
