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
    this.props.changePos(e.target.value);
    // console.log(this.props.form.position);
  }

	handleCapitolPos(e){
    // console.log("Hello");
		e.preventDefault();
		this.setState({position: e.target.value});
		// console.log('target', e.target.value);
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
              <input type="radio" onClick={this.selectPosition} name="position" value="Control Center Operator" id="ops-pos-1" />
              <label className="ops-label" htmlFor="ops-pos-1">
                Control Center Operator<br />
                <span className="pos-desc">
                  Responds to telephone inquiries and request from polling places using a computer-based call center system.
                </span>
              </label>
  					</div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Absentee Ballot Team Member"id="ops-pos-2" />
              <label className="ops-label" htmlFor="ops-pos-2">
                Absentee Ballot Team Member<br />
                <span className="pos-desc">
                  Prepares mail ballots for final processing and tabulation.
                </span>
              </label>
            </div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Ballot Storage Team" id="ops-pos-3" />
              <label className="ops-label" htmlFor="ops-pos-3">
                Ballot Storage Team<br />
                <span className="pos-desc">
                  Inventories, organizes, stores, and secures all ballots.
                </span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Computer Operations Team Member" id="ops-pos-4" />
              <label className="ops-label" htmlFor="ops-pos-4">
                Computer Operations Team Member<br />
                <span className="pos-desc">
                  Controls and inventories the tabulation of ballots.
                </span>
              </label>
            </div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Duplication Team Member" id="ops-pos-5" />
              <label className="ops-label" htmlFor="ops-pos-5">
                Duplication Team Member<br />
                <span className="pos-desc">
                  Generates one-for-one duplicates of damaged ballots that are unable to be processed through the central scanner.
                </span>
              </label>
            </div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Manual Audit Team Member" id="ops-pos-6" />
              <label className="ops-label" htmlFor="ops-pos-6">
                Manual Audit Team Member<br />
                <span className="pos-desc">
                  Audits voted ballots to ensure the security and integrity of the vote counting system.
                </span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Official Observer Team Member" id="ops-pos-7" />
              <label className="ops-label" htmlFor="ops-pos-7">
                Official Observer Team Member<br />
                <span className="pos-desc">
                  Serves as the “eyes and ears” of the general public to ensure the security and integrity of the vote counting system.
                </span>
              </label>
            </div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Poll Book Audit Team Member" id="ops-pos-8" />
              <label className="ops-label" htmlFor="ops-pos-8">
                Poll Book Audit Team Member<br />
                <span className="pos-desc">
                  Verifies turnout matches the computer generated results. Audits the poll books to ensure the security and integrity of the vote counting system.
                </span>
              </label>
            </div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Precinct Can Team Member" id="ops-pos-9" />
              <label className="ops-label" htmlFor="ops-pos-9">
                Precinct Can Team Member<br />
                <span className="pos-desc">
                  Receives, inventories, and distributes election related supplies in the precinct cans to various individuals and teams.
                </span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Receiving Team Member" id="ops-pos-10" />
              <label className="ops-label" htmlFor="ops-pos-10">
                Receiving Team Member<br />
                <span className="pos-desc">
                  Accepts custody of voted ballots, precinct cans, and voting equipment at the counting center.
                </span>
              </label>
            </div>
            <div className="capitol-position radio-btn col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Election Information Services Official" id="ops-pos-11" />
              <label className="ops-label" htmlFor="ops-pos-11">
                Election Information Services Official<br />
                <span className="pos-desc">
                  Responds to general inquiries from the public and forwards special circumstances to appropriate officials.
                </span>
              </label>
            </div>
          </div>
          <h3>Precinct Positions</h3>
          <div className="row">
            <div className="precinct-position radio-btn col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Delivery/Collection Official" id="pre-pos-1" />
              <label className="pre-label" htmlFor="pre-pos-1">
                Delivery/Collection Official<br />
                <span className="pos-desc">
                  Delivers ballots and election supplies to the polling places on election morning. Collects voted ballots and election supplies after the polls have closed on election day.
                </span>
              </label>
            </div>
            <div className="precinct-position radio-btn col-sm-4">
              <input type="radio" onClick={this.selectPosition}  name="position" value="Facility Official" id="pre-pos-2" />
              <label className="pre-label" htmlFor="pre-pos-2">
                Facility Official<br />
                <span className="pos-desc">
                  Sets up election equipment at polling places on election eve. Provides access to polling places on election day. Disassembles and stores the election equipment after the polls close on election day.
                </span>
              </label>
            </div>
            <div className="precinct-position radio-btn col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Precinct Operations Chair" id="pre-pos-3" />
              <label className="pre-label" htmlFor="pre-pos-3">
                Precinct Operations Chairperson<br />
                <span className="pos-desc">
                  Manages the polling place and is responsible for the security and integrity of ballots issued and votes cast.
                </span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="precinct-position radio-btn col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Precinct Operations Official" id="pre-pos-4" />
              <label className="pre-label" htmlFor="pre-pos-4">
                Precinct Operations Official<br />
                <span className="pos-desc">
                  Assist voters at the polling place while ensuring the integrity of the voting process. Precinct Officials operate the Information and Ballot Demonstration Station, Poll Book Station, Ballot Box Station, and eSlate Station.
                </span>
              </label>
            </div>
            <div className="precinct-position radio-btn col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Precinct Voter Assistance Official" id="pre-pos-5" />
              <label className="pre-label" htmlFor="pre-pos-5">
                Precinct Voter Assistance Official<br />
                <span className="pos-desc">
                  Assist the chairperson in managing the polling place. Operates the Voter Assistance Station. Assist voters and administers special procedures.
                </span>
              </label>
            </div>
            <div className="precinct-position radio-btn col-sm-4">
              <input type="radio" onClick={this.selectPosition} name="position" value="Precinct Troubleshooter" id="pre-pos-6" />
              <label className="pre-label" htmlFor="pre-pos-6">
                Precinct Troubleshooter<br />
                <span className="pos-desc">
                  Monitors the polling places to ensure Officials are following standard operating procedures; and replenishes supplies as necessary. Must have a valid driver’s license.
                </span>
              </label>
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