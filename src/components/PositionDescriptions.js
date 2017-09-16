import React, { Component } from 'react';
import { changePos, getData} from '../reducers/'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class PositionDescription extends Component {
	constructor(props){
		super(props);
		this.state={
			position: ''
    };
		this.handleCapitolPos = this.handleCapitolPos.bind(this);
    this.selectPosition = this.selectPosition.bind(this);
	}

  selectPosition(e){
    this.setState({position: e.target.value});
    console.log(e.target.value);
  }

	handleCapitolPos(e){
    console.log("Hello");
		e.preventDefault();
		this.setState({position: e.target.value});
		console.log('target', e.target.value);
    this.props.changePos(e.target.value);
    console.log(this.props.form.position);
		// if (document.getElementById(e.target.id).checked='true'){
		// 	document.getElementById(e.target.id).parentNode.style='border: 5px solid red';
		// }
	}

	render(){
		return(
			<div className="position-description">
        <fieldset id="volunteer-positions">
          <p>State Capitol Positions</p>
  				<div className="row">
  					<div className="capitol-position col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Control Center Operator" /> Control Center Operator
  					</div>
            <div className="capitol-position col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Absentee Ballot Team Member" /> Absentee Ballot Team Member
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Ballot Storage Team" /> Ballot Storage Team
            </div>
          </div>
          <div className="row">
            <div className="capitol-position col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Computer Operations Team Member" /> Computer Operations Team Member
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Duplication Team Member" /> Duplication Team Member
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Manual Audit Team Member" /> Manual Audit Team Member
            </div>
          </div>
          <div className="row">
            <div className="capitol-position col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Official Observer Team Member" /> Official Observer Team Member
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Poll Book Audit Team Member" /> Poll Book Audit Team Member
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Precinct Can Team Member" /> Precinct Can Team Member
            </div>
          </div>
          <div className="row">
            <div className="capitol-position col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Receiving Team Member" /> Receiving Team Member
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Election Information Services Official" /> Election Information Services Official
            </div>
          </div>
          <p>Polling Site Positions</p>
          <div className="row">
            <div className="capitol-position col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Delivery/Collection Official" /> Delivery/Collection Official
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" onClick={this.selectPosition}  name="position" value="Facility Official" /> Facility Official
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Precinct Operations Chair" /> Precinct Operations Chair
            </div>
          </div>
          <div className="row">
            <div className="capitol-position col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Precinct Operations Official" /> Precinct Operations Official
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Precinct Voter Assistance Official" /> Precinct Voter Assistance Official
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Precinct Troubleshooter" /> Precinct Troubleshooter
            </div>
          </div>
        </fieldset>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePos,
  getData,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PositionDescription);