import React, { Component } from 'react';

class PositionDescription extends Component {
	render(){
		return(
			<div className="position-description">
				<div className="row">
					<div className="control-center-operator col-sm-4">
						<p><strong>Controler Center Operator</strong><br />
						Responds to telephone inquiries and request from polling places using a computer-based call center system. Duties include entering information, determining solutions, and resolving problems.
						Stipend: $85</p>
					</div>
					<div className="counting-center-official col-sm-4">
						<p><strong>Counting Center Official</strong><br />
						Processes, tabulates, and disseminates election results in an accurate and timely manner. Consist of nine (9) teams.

							Stipend: $85-95
							<ul>
								<li>
									Absentee Ballot Team: Prepares mail ballots for final processing and tabulation.
								</li>
								<li>
									Ballot Storage Team: Inventories, organizes, stores, and secures all ballots.
								</li>
									Computer Operations Team: Controls and inventories the tabulation of ballots.
								<li>
									Duplication Team: Generates one-for-one duplicates of damaged ballots that are unable to be processed through the central scanner.
								</li>
								<li>
									Manual Audit Team: Audits voted ballots to ensure the security and integrity of the vote counting system.
								</li>
								<li>
									Official Observer Team: Serves as the “eyes and ears” of the general public to ensure the security and integrity of the vote counting system.
								</li>
								<li>
									Poll Book Audit Team: Verifies turnout matches the computer generated results. Audits the poll books to ensure the security and integrity of the vote counting system.
								</li>
								<li>
									Precinct Can Team: Receives, inventories, and distributes election related supplies in the precinct cans to various individuals and teams.
								</li>
								<li>
									Receiving Team: Accepts custody of voted ballots, precinct cans, and voting equipment at the counting center.
								</li>
							</ul>
						</p>
					</div>
					<div className="delivery-collection-official col-sm-4">
						<p><strong>Delivery/Collection Official</strong><br />
						Delivers ballots and election supplies to the polling places on election morning. Collects voted ballots and election supplies after the polls have closed on election day. Each team consist of two members.

							Stipend: $50 – $95
							<ul>
								<li>
									Chair: Coordinates and directs the activities of the D/C Team. Completes documentation and certifies the sealing of the election supplies.
								</li>
								<li>
									Member: Assist the Chair and witnesses the transfer of custody of ballots and election supplies
								</li>
							</ul>
						</p>
					</div>
				</div>
				<div className="row">
					<div className="election-info-services-official col-sm-4">
						<p><strong>Election Information Services Official</strong><br />
						Responds to general inquiries from the public and forwards special circumstances to appropriate officials.

						Stipend: $85</p>
					</div>
					<div className="facility-official col-sm-4">
						<p><strong>Facility Official</strong><br />
						Sets up election equipment at polling places on election eve. Provides access to polling places on election day. Disassembles and stores the election equipment after the polls close on election day.

						Stipend: $60 – $140</p>
					</div>
					<div className="precinct-official col-sm-4">
						<p><strong>Precinct Official</strong><br />
						Assist voters at the polling place while ensuring the integrity of the voting process. Precinct Officials operate the Information and Ballot Demonstration Station, Poll Book Station, Ballot Box Station, and eSlate Station.

						Stipend: $5 – $175

						Additional positions include:
						<ul>
							<li>
								Precinct Chairperson: Manages the polling place and is responsible for the security and integrity of ballots issued and votes cast.
							</li>
							<li>
								Voter Assistance Official: Assist the chairperson in managing the polling place. Operates the Voter Assistance Station. Assist voters and administers special procedures.
								</li>
								<li>
									Standby Precinct Official: Reports to election headquarters on election morning for dispatch to a polling place that requires additional staffing.
								</li>
								<li>
									Alternate Election Officials: Stands-by at home on election morning for dispatch to a polling place that requires additional staffing.
								</li>
							</ul>
						</p>
					</div>
				</div>
				<div className="row">
					<div className="precinct-troubleshooter col-sm-4">
						<p><strong>Precinct Troubleshooter</strong><br />
						Monitors the polling places to ensure Officials are following standard operating procedures; and replenishes supplies as necessary. Must have a valid driver’s license.
						</p>
					</div>
				</div>
				<div className="factsheet">
					<a href="http://elections.hawaii.gov/wp-content/uploads/2017/02/FS401PO002-Election-Day-Officials.pdf">View printable Election Day Officals FACTSHEET</a>
				</div>
			</div>
		)
	}
}

export default PositionDescription;