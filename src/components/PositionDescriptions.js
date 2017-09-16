import React, { Component } from 'react';

class PositionDescription extends Component {
	constructor(props){
		super(props);
		this.state={
			position: ''
    };
		this.handleCapitolPos = this.handleCapitolPos.bind(this);
	}

	handleCapitolPos(e){
		e.preventDefault();
		this.setState({position: e.target.value});
		console.log('target', e.target.value);
		// if (document.getElementById(e.target.id).checked='true'){
		// 	document.getElementById(e.target.id).parentNode.style='border: 5px solid red';
		// }
	}

	render(){
		return(
      <div className="positions-grp">
        <fieldset id="volunteer-positions">
  				<div className="row">
  					<div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="control-center-operator" id="position-1"/>
              <label htmlFor="position-1">
                Control Center Operator
              </label>
  					</div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="absentee-ballot-team" id="position-2"/>
              <label htmlFor="position-2">
                Absentee Ballot Team Member
              </label>
            </div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="ballot-storage-team" /> Ballot Storage Team
            </div>
          </div>
          <div className="row">
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="computer-operations-team" /> Computer Operations Team Member
            </div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="duplication-team" /> Duplication Team Member
            </div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="manual-audit-team" /> Manual Audit Team Member
            </div>
          </div>
          <div className="row">
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="official-observer-team" /> Official Observer Team Member
            </div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="poll-book-audit-team" /> Poll Book Audit Team Member
            </div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="precinct-can-team" /> Precinct Can Team Member
            </div>
          </div>
          <div className="row">
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="receiving-team" /> Receiving Team Member
            </div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="election-information-services-official" /> Election Information Services Official
            </div>
          </div>
          <p>Precinct Positions</p>
          <div className="row">
            <div className="precinct-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="delivery-collection-official" /> Delivery/Collection Official
            </div>
            <div className="precinct-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="facility-official" /> Facility Official
            </div>
            <div className="precinct-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="precinct-operations-chair" /> Precinct Operations Chair
            </div>
          </div>
          <div className="row">
            <div className="precinct-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="precinct-operations-official" /> Precinct Operations Official
            </div>
            <div className="precinct-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="precinct-voter-assistance-official" /> Precinct Voter Assistance Official
            </div>
            <div className="precinct-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="precinct-troubleshooter" /> Precinct Troubleshooter
            </div>
          </div>
        </fieldset>
      </div>
		)
	}
}

export default PositionDescription;