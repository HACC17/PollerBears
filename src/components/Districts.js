import React, { Component } from 'react';
import axios from 'axios';
import { changeDistrict, getData} from '../reducers/'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

let stateDistrict;
let otherArray;

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
			e.preventDefault();
			this.setState({district: e.target.value});
			stateDistrict = {district: e.target.value};
			console.log('selection district', stateDistrict);
		}

		handleSubmit(e){
			e.preventDefault();
      this.props.changeDistrict(this.state.district);
      console.log(this.props.form.district);
			console.log('submit', this.state.district);
			console.log('state dist', stateDistrict);
		}

		getTrainings(data){
			axios({
				method: 'GET',
				url: "http://localhost:3001/training/",
				responseType: 'json'
			}).then(function(response){
				console.log(response);
				let trainings = response.data;
				let arrayToShow = [];
				trainings.forEach(function(element){
					for (let key in element){
						if (key === "district"){
							if (element[key] === stateDistrict){
								// if (element[key]){
									// console.log('dist', element[key]);
								let arr = [];
								for (let props in element){
									arr.push(element[props]);
								}
								arrayToShow.push(arr);

							}
						}
					}
					otherArray = arrayToShow;
				});
			});
			this.state.trainings = otherArray;
			const inputList = this.state.trainings;
			console.log(inputList);
			this.setState({
				inputList: this.state.trainings
			});
		}

	render(){
		console.log('district props', this.props);
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
						<button type="submit" value="Submit" onClick={this.getTrainings}>test</button>
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

const mapStateToProps = (state) => {
  return {
    ...state
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changeDistrict,
  getData,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Districts);