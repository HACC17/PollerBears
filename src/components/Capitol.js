import React, { Component } from 'react';
import { changeTraining, getData} from '../reducers/'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Capitol extends Component {
		constructor(props){
			super(props);
			this.state={
				training: 'State Capitol Auditorium'
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
			this.setState({training: e.target.value});
		}

		handleSubmit(e){
			e.preventDefault();
      this.props.changeTraining(this.state.training);
			console.log('submit', this.state.training);
		}
	render(){
		console.log('state', this.state);
		return(
			<form onSubmit={this.handleSubmit}>
				<label>
					Select Training Location
					<select value={this.state.training} onChange={this.handleSelection}>
					  <option value="State Capitol Auditorium">State Capitol Auditorium</option>
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
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