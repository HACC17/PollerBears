import React, { Component } from 'react';
import axios from 'axios';
import { changeDistrict, getData} from '../reducers/'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchTrainings } from '../actions/index.js';

let stateDistrict;
let otherArray;
let view;
let info = [];
let times = [];
let trainVal;

class Districts extends Component {
		constructor(props){
			super(props);
			this.state={
				data: '',
				district: '',
				time: '',
				trainings: '',
				testingArr: ''
			};
			this.handleSelection = this.handleSelection.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
		}

		handleSelection(e){
			e.preventDefault();
			this.setState({district: e.target.value});
			stateDistrict = e.target.value;
		}

		handleSubmit(e){
			e.preventDefault();
      // this.props.changeDistrict(this.state.district);
				let trainings = this.props.trainingData;
				let arr = [];
				let arrSlice = [];
				let arrayToShow = [];
				let trainInfo = [];
				let trainingBlocks;
				let trainingsArr = trainings.map(function(element){
					let elArr = [element];
					for (let keyVal in elArr){
						trainVal = elArr[keyVal];
						trainingBlocks = [trainVal.day, trainVal.date, trainVal.county, trainVal.address, trainVal.city, trainVal.zip, trainVal.time, trainVal.district];
						times.push(trainVal.time);
					}
					for (let key in trainVal){
						if (key === "district"){
							if (trainVal[key] === stateDistrict){
								for (let props in trainVal){
									// let signUps = <div className="train-info" key={props}>
									// 				{trainingBlocks}
									// 				<div className="radio">
									// 					<label>
									// 						<input type="radio" value={times[props]}
									// 							/>
									// 						{times[props]}
									// 					</label>
									// 				</div>
									// 			</div>;
									// info.push(signUps);
									// console.log('info', info);
									// arr.push(info);
									arr.push(trainVal[props]);
									arrSlice = arr.slice(2).join(' ');
									// console.log('arrSlice', arr);
								}
								arrayToShow.push(arrSlice);
							}
						}
					}
					otherArray = arrayToShow;
					return trainingBlocks;
				});
				for (var items in trainingsArr){
					let signUps = <div className="train-info" key={items}>
													{trainingsArr[items]}
													<div className="radio">
														<label>
															<input type="radio" value={times[items]}
																checked={this.state.selectedTraining===times[items]}
																onChange={this.handleOptionChange}
																/>
															{times[items]}
														</label>
													</div>
												</div>;
					info.push(signUps);
				}
				console.log('info', info);
				console.log('other array', otherArray);
			this.state.trainings = otherArray;
			const inputList = this.state.trainings;
			this.setState({
				inputList: this.state.trainings
			});

			// trainingsArr = trainings.map(function(data){
			// 	let datArr = [data];
			// 	for (var keyValue in datArr){
			// 		var trainVal = datArr[keyValue];
			// 		console.log('train val', trainVal.time);
			// 		times.push(trainVal.time);
			// 	}
			// });

		}


		componentDidMount() {
		 this.props.fetchTrainings("http://localhost:3001/training");
		}

	render(){


		return(
			<div>
				<div>
					<form onSubmit={this.handleSubmit}>
						<label>
							Select District
							<select value={this.state.district} onChange={this.handleSelection}>
							  <option placeholder="Choose a District" value="Choose a District" disabled selected>Choose a District</option>
							  <option value="Central Oahu">Central Oahu</option>
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
					<button onClick={this.handleSubmit}>Trainings</button>
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

const mapDispatchToProps = dispatch => {
	bindActionCreators({
  changeDistrict,
  getData,
	}, dispatch)
	return {
      fetchTrainings: (url) => dispatch(fetchTrainings(url)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Districts);