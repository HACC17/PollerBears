import React, { Component } from 'react';
import { changeTraining, getData} from '../reducers/'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios';

let trainings;

class Capitol extends Component {
		constructor(props){
			super(props);
			this.state={
				training: "State Capitol Senate Conference Room 016",
				capitol: false,
				inputList: ''
			};
			this.handleSelection = this.handleSelection.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
			this.fetchTrain = this.fetchTrain.bind(this);
			this.handleTimes = this.handleTimes.bind(this);
		}

		handleSelection(e){
			this.props.changeTraining(document.getElementById('capitol-training').value);
		}

		handleTimes(e){
			e.preventDefault();
			this.setState({time: e.target.value});
			console.log('target', e.target.value);
			this.props.changeTraining(e.target.value);
		}

			handleSubmit(e){
				e.preventDefault();
				this.props.changeTraining(document.getElementById('capitol-training').value);
      // this.props.changeDistrict(this.state.district);
      let sites;
      let siteArr = [];
      for (var i = 1; i < trainings.length; i++){
	      if (trainings[i].site === "State Capitol Auditorium"){
	      	let newArr = [];
	      	newArr.push(trainings[i]);
	        for (var keyVal in newArr){
	        	var newVal = newArr[keyVal];
	        	sites = [newVal.day + ' ', newVal.date + ' ', newVal.site + ' ', newVal.address + ' ', newVal.city + ' ', newVal.zip + ' ', newVal.time];
	        	siteArr.push(sites);
	        }
	      }
		  }
      for (var j = 0; j < siteArr.length; j++){
					var radioInputArr = [];
					var breakPoint = <br/>;
					let valuesArr = [siteArr[j][0] + siteArr[j][1] + siteArr[j][3] + siteArr[j][4] + siteArr[j][5] + siteArr[j][6]];
					var radioInput = <div className="cap-radio">
															<label>
																<input type="radio" id={`capitol${j}`} key={j} name={`capitol${j}`}
																	value={valuesArr}
																	checked={this.state.time===siteArr[j][6]}
																	onChange={this.handleTimes}
																/>
																{siteArr[j][6]}
															</label>
														</div>;
					radioInputArr.push(radioInput);
					siteArr[j].splice(6);
					siteArr[j].splice(6, 0, radioInputArr);
					siteArr[j].push(breakPoint);
				}
			  this.state.trainings = siteArr.sort(function(a, b){
						if (a[1] > b[1]){
							return 1;
						}
						if (a[1] < b[1]){
							return -1;
						}
						return 0;
					});
				const inputList = this.state.trainings;
				this.setState({
					inputList: this.state.trainings
				});
		}

  fetchTrain(data){
    axios({
      method: 'GET',
      url: "http://localhost:13001/training/",
      responseType: 'json'
    })
      .then(function(response){
      	trainings = response.data;
      });
  }

	componentDidMount() {
		this.fetchTrain();
	}

	render(){
		return(
      <div className="location-container col-lg-12">
        <div>
    			<form onSubmit={this.handleSubmit}>
    				<label>
    					Training Location:
    					<select value={this.state.training} onChange={this.handleSelection}>
    					  <option id="capitol-training" defaultValue="State Capitol Senate Conference Room 016"
    							checked={this.state.training === "State Capitol Senate Conference Room 016"}
    					  	>State Capitol Senate Conference Room 016</option>
    					</select>
    				</label>
    				<button type="submit" onClick={this.handleSubmit}>View Schedule</button>
    				<div>{this.state.inputList}</div>
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

const mapDispatchToProps = dispatch => bindActionCreators({
  changeTraining,
  getData,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Capitol);
