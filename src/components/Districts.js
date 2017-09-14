import React, { Component } from 'react';
// import axios from 'axios';

const test = {
	test: 'YOU'
};
// const times = [{
// 	"centralOahu": {
// 		"training": {
// 			"date": '7/14/2018',
// 			"address": 'Mililani Middle',
// 			"time": '11:00am - 1:00pm'
// 		}
// 	},
// 	"eastHonolulu": {
// 		"training": {
// 			"date": '6/16/2018',
// 			"address": 'Koko Head Elementary',
// 			"time": '6:30pm - 8:00pm'
// 		}
// 	}
// }];

export default class Districts extends Component {
		constructor(props){
			super(props);
			this.state={
				district: 'Central Oahu'
				// site: 'State Capitol Auditorium',
				// address: '415 South Beretania Street',
				// city: 'Honolulu',
				// zip: '96813',
				// time: '6:00pm - 7:00pm'
			};
			this.handleSelection = this.handleSelection.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
		}

		handleSelection(e){
			this.setState({district: e.target.value});
		}

		handleSubmit(e){
			e.preventDefault();
			console.log('submit', this.state.district);
		}
	render(){
		console.log('state', this.state);
		console.log('props', this.props);
		var view;

		function SiteList(props){
			return <h1>{props.site}</h1>;
		}

		if (this.state.district==="Central Oahu"){
			view = <SiteList site={test.test} />
		}
		return(
			<div>
				<div>
					<form onSubmit={this.handleSubmit}>
						<label>
							Select District
							<select value={this.state.district} onChange={this.handleSelection}>
							  <option placeholder="Choose a District" disabled>Choose a District</option>
							  <option value="Central Oahu" selected>Central Oahu</option>
							  <option value="East Honolulu">East Honolulu</option>
							  <option value="Ewa">Ewa</option>
							  <option value="Kaneohe">Kaneohe</option>
							  <option value="Metro">Metro</option>
							  <option value="Pearl City">Pearl City</option>
							</select>
						</label>
						<input type="submit" value="Submit" />
					</form>
				</div>
				<div className="time-container">
					{view}
				</div>
		</div>
		);
	}
}
