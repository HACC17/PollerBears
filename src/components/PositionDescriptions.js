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
          <h3>Operational Support Positions</h3>
  				<div className="row">
  					<div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="control-center-operator" id="bts-pos-1" />
              <label htmlFor="bts-pos-1">
                Control Center Operator
              </label>
  					</div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="absentee-ballot-team" id="bts-pos-2" />
              <label htmlFor="bts-pos-2">
                Absentee Ballot Team Member
              </label>
            </div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="ballot-storage-team" id="bts-pos-3" />
              <label htmlFor="bts-pos-3">
                Ballot Storage Team
              </label>
            </div>
          </div>
          <div className="row">
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="computer-operations-team" id="bts-pos-4" />
              <label htmlFor="bts-pos-4">
                Computer Operations Team Member
              </label>
            </div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="duplication-team" id="bts-pos-5" />
              <label htmlFor="bts-pos-5">
                Duplication Team Member
              </label>
            </div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="manual-audit-team" id="bts-pos-6" />
              <label htmlFor="bts-pos-6">
                Manual Audit Team Member
              </label>
            </div>
          </div>
          <div className="row">
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="official-observer-team" id="bts-pos-7" />
              <label htmlFor="bts-pos-7">
                Official Observer Team Member
              </label>
            </div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="poll-book-audit-team" id="bts-pos-8" />
              <label htmlFor="bts-pos-8">
                Poll Book Audit Team Member
              </label>
            </div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="precinct-can-team" id="bts-pos-9" />
              <label htmlFor="bts-pos-9">
                Precinct Can Team Member
              </label>
            </div>
          </div>
          <div className="row">
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="receiving-team" id="bts-pos-10" />
              <label htmlFor="bts-pos-10">
                Receiving Team Member
              </label>
            </div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="election-information-services-official" id="bts-pos-11" />
              <label htmlFor="bts-pos-11">
                Election Information Services Official
              </label>
            </div>
          </div>
          <h3>Precinct Positions</h3>
          <div className="row">
            <div className="precinct-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="delivery-collection-official" id="pre-pos-1" />
              <label htmlFor="pre-pos-1">
                Delivery/Collection Official
              </label>
            </div>
            <div className="precinct-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="facility-official" id="pre-pos-2" />
              <label htmlFor="pre-pos-2">
                Facility Official
              </label>
            </div>
            <div className="precinct-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="precinct-operations-chair" id="pre-pos-3" />
              <label htmlFor="pre-pos-3">
                Precinct Operations Chair
              </label>
            </div>
          </div>
          <div className="row">
            <div className="precinct-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="precinct-operations-official" id="pre-pos-4" />
              <label htmlFor="pre-pos-4">
                Precinct Operations Official
              </label>
            </div>
            <div className="precinct-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="precinct-voter-assistance-official" id="pre-pos-5" />
              <label htmlFor="pre-pos-5">
                Precinct Voter Assistance Official
              </label>
            </div>
            <div className="precinct-position radio-btn col-sm-4">
              <input type="radio" name="volunteer-positions" value="precinct-troubleshooter" id="pre-pos-6" />
              <label htmlFor="pre-pos-6">
                Precinct Troubleshooter
              </label>
            </div>
          </div>
        </fieldset>
      </div>
		)
	}
}

export default PositionDescription;