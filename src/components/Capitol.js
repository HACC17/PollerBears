import React, { Component } from 'react';

class Capitol extends Component {
		constructor(props){
			super(props);
			this.state={
				training: ''
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
			console.log('submit', this.state.training);
		}
	render(){
		console.log('state', this.state);
		return(
			<form onSubmit={this.handleSubmit}>
				<label>
					Select Training Location
					<select value={this.state.training} onChange={this.handleSelection}>
					  <option value="YMCA">YMCA</option>
					  <option value="Capitol">Capitol</option>
					  <option value="State Capitol Auditorium: 6:00pm - 7:00pm">State Capitol Auditorium</option>
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default Capitol;