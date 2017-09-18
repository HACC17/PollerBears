import React, { Component } from 'react';
import Form from '../components/Form';
import Position from './Position';
import MapLocations from './MapLocations';
import Capitol from '../components/Capitol';
import Districts from '../components/Districts';
import { connect } from 'react-redux'

let view;

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

class Register extends Component {
	render(){
		if (this.props.form.position === "Control Center Operator" ||
        this.props.form.position === "Absentee Ballot Team Member" || 
        this.props.form.position === "Ballot Storage Team" || 
        this.props.form.position === "Computer Operations Team Member" ||
        this.props.form.position === "Duplication Team Member" ||
        this.props.form.position === "Manual Audit Team Member" ||
        this.props.form.position === "Official Observer Team Member" ||
        this.props.form.position === "Poll Book Audit Team Member" || 
        this.props.form.position === "Precinct Can Team Member" ||
        this.props.form.position === "Receiving Team Member" ||
        this.props.form.position === "Election Information Services Official"){
			view = <Capitol/>
		}else{
			view = <div>
								<Districts/>
							</div>
		}

		return(
			<div>
				<Form/>
				<Position/>
				<MapLocations/>
				{view}
			</div>
		)
	}
}

export default connect(mapStateToProps)(Register);