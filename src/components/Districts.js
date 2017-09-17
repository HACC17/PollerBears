import React, { Component } from 'react';
import { changeDistrict, getData} from '../reducers/'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchTrainings } from '../actions/index.js';

let stateDistrict;
let otherArray;

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
					otherArray = arrayToShow.sort(function(a, b){
						if (a[1] < b[1]){
							return 1;
						}
						if (a[1] > b[1]){
							return -1;
						}
						return 0;
					});
					return otherArray;
				});
				for (var i = 0; i < otherArray.length; i++){
					var radioInputArr = [];
					var breakPoint = <br/>;
					var radioInput = <div className="district-radio" onSubmit={this.handleDistrictSubmit}>
															<label>
																<input type="radio" id={`radio${i}`} key={i}
																	value={otherArray[i][0] + otherArray[i][1] + otherArray[i][3] + otherArray[i][4] + otherArray[i][5] + otherArray[i][6]}
																	checked={this.state.time===otherArray[i][6]}
																	onClick={this.handleTimes}
																/>
																{otherArray[i][6]}
															</label>
														</div>;
					radioInputArr.push(radioInput);
					otherArray[i].splice(6);
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
					<form onChange={this.handleSubmit}>
						<label>
							Select District
							<select value={this.state.district} onChange={this.handleSelection}>
							  <option placeholder="Choose a District" defaultValue="Choose a District" disabled>Choose a District</option>
							  <option value="Central Oahu">Central Oahu</option>
							  <option value="East Honolulu">East Honolulu</option>
							  <option value="Ewa">Ewa</option>
							  <option value="Kaneohe">Kaneohe</option>
							  <option value="Metro">Metro</option>
							  <option value="Pearl City">Pearl City</option>
							</select>
						</label>
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