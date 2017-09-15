import React, { Component } from 'react';
import axios from 'axios';

let test = "Hi";
let stateDistrict;
let otherArray;
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


class Districts extends Component {
		constructor(props){
			super(props);
			this.state={
				data: '',
				district: 'Central Oahu',
				time: '',
				trainings: '',
				testingArr: ''
				// site: 'State Capitol Auditorium',
				// address: '415 South Beretania Street',
				// city: 'Honolulu',
				// zip: '96813',
				// time: '6:00pm - 7:00pm'

			};
			this.handleSelection = this.handleSelection.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
			this.getTrainings = this.getTrainings.bind(this);
		}

		handleSelection(e){
			this.setState({district: e.target.value});
			console.log('get trainings', this.getTrainings());

		}

		handleSubmit(e){
			e.preventDefault();
			console.log('submit', this.state.district);
			stateDistrict = this.state.district;
			this.getTrainings();
		}

		getTrainings(data){
			axios({
				method: 'GET',
				url: "http://localhost:3001/training/",
				responseType: 'json'
			}).then(function(response){
				let trainings = response.data;
				let arrayToShow = [];
				trainings.forEach(function(element){
					for (let key in element){
						if (key === "district"){
							if (element[key] === stateDistrict){
								console.log(element[key]);
								let arr = [];
								for (let props in element){
									arr.push(element[props]);
								}
								arrayToShow.push(arr);

							}
						}
					}
					otherArray = arrayToShow;
				})
			});
			this.state.trainings = otherArray;
			const inputList = this.state.trainings;
			console.log(inputList);
			this.setState({
				inputList: this.state.trainings
			})
		}

	render(){
		var view;

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
					<button onClick={this.getTrainings}>Trainings</button>
					<div>{this.state.inputList}</div>
				</div>
		</div>
		);
	}
}

export default Districts;
