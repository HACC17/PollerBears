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
			this.handleTimes = this.handleTimes.bind(this);
			this.handleDistrictSubmit = this.handleDistrictSubmit.bind(this);
		}

		handleTimes(e){
			this.setState({time: e.target.value});
			console.log('target', e.target.value);
		}

		handleSelection(e){
			this.setState({district: e.target.value});
			stateDistrict = e.target.value;
		}

		handleDistrictSubmit(e){
			e.preventDefault();
		}

		handleSubmit(e){
			e.preventDefault();
      // this.props.changeDistrict(this.state.district);
				let trainings = this.props.trainingData;
				let arr = [];
				let arrSlice = [];
				let arrayToShow = [];
				let trainingsArr = trainings.forEach(function(element){
					for (let key in element){
						if (key === "district"){
							if (element[key] === stateDistrict){
								let arr = [];
								for (let props in element){
									arr.push(element[props] + ' ');
									var arrSlice = arr.slice(2);
								}
								arrayToShow.push(arrSlice);
							}
						}
					}
					otherArray = arrayToShow;
					return otherArray;
				});
				for (var i = 0; i < otherArray.length; i++){
					var radioInputArr = [];
					var breakPoint = <br/>;
					var radioInput = <div className="district-radio" onSubmit={this.handleDistrictSubmit}>
															<label>
																<input type="radio" id={i} key={i}
																	value={otherArray[i][6]}
																	checked={this.state.time===otherArray[i][6]}
																	onClick={this.handleTimes}
																/>
																{otherArray[i][6]}
															</label>
														</div>;
					radioInputArr.push(radioInput);
					let newOther = otherArray[i].splice(6);
					otherArray[i].splice(6, 0, radioInputArr);
					otherArray[i].push(breakPoint);
				}
			this.state.trainings = otherArray;
			const inputList = this.state.trainings;
			this.setState({
				inputList: this.state.trainings
			});
		}

		componentDidMount() {
		 this.props.fetchTrainings("http://localhost:3001/training");
		}

	render(){
		return(
			<div>
				<div>
					<br/>
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
						<button onChange={this.handleSubmit}>Trainings</button>
						<div className="time-container">
							<div>{this.state.inputList}</div>
						</div>
					</form>
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