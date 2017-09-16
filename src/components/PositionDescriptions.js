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
              <input type="radio" name="position" value="control-center-operator" /> Control Center Operator
  					</div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="absentee-ballot-team" /> Absentee Ballot Team Member
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="ballot-storage-team" /> Ballot Storage Team
            </div>
          </div>
          <div className="row">
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="computer-operations-team" /> Computer Operations Team Member
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="duplication-team" /> Duplication Team Member
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="manual-audit-team" /> Manual Audit Team Member
            </div>
          </div>
          <div className="row">
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="official-observer-team" /> Official Observer Team Member
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="poll-book-audit-team" /> Poll Book Audit Team Member
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="precinct-can-team" /> Precinct Can Team Member
            </div>
          </div>
          <div className="row">
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="receiving-team" /> Receiving Team Member
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="election-information-services-official" /> Election Information Services Official
            </div>
          </div>
          <p>Polling Site Positions</p>
          <div className="row">
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="delivery-collection-official" /> Delivery/Collection Official
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="facility-official" /> Facility Official
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="precinct-operations-chair" /> Precinct Operations Chair
            </div>
          </div>
          <div className="row">
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="precinct-operations-official" /> Precinct Operations Official
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="precinct-voter-assistance-official" /> Precinct Voter Assistance Official
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="precinct-troubleshooter" /> Precinct Troubleshooter
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