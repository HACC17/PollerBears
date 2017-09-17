import React, { Component } from 'react';

class Contact extends Component {
	render(){
		return(
			<div className="contact-page">
				<div className="contact-us">
					<h1>Contact Us</h1>
				</div>
				<div>
					<p><strong>CHIEF ELECTION OFFICER</strong><br />
					Scott T. Nago</p>
					<div>
						<p>Address<br/>
						Office of Elections 802 Lehua Avenue Pearl City, Hawaii 96782</p>
						<p><strong>Phone</strong><br/>
						(808)453-VOTE(8683)</p>
						<p><strong>Neighbor Island Toll Free</strong><br/>
						1-800-442-VOTE(8683)</p>
						<p><strong>TTY</strong><br />
						(808)453-6150<br />
						<strong>TY Toll Free</strong></p>
						<p><strong>Fax</strong><br/>
						(808)453-6006</p>
						<p><strong>Email</strong><br/>
						elections@hawaii.gov</p>
						<p><strong>Hours</strong><br/>
						7:45am - 4:30pm<br />
						<em>Except Saturday, Sunday, and holidays</em></p>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;