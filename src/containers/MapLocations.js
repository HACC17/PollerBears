import React, { Component } from 'react';
import MapLeaf from '../components/Map';
import { changeTime, getData} from '../reducers/'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
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
		console.log('You signed up for', this.props.form.time);
	}

	render(){
		return(
			<div className="location-container col-lg-12">
				<h2 className="section-heading"><i className="fa fa-globe" aria-hidden="true"></i> Select A Volunteer Site</h2>
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
