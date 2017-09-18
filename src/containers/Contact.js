import React, { Component } from 'react';

class Contact extends Component {
	render(){
		return(
			<div className="contact-page">
                <article>
                    <h2>Contact Us</h2>
                    <section>
                        <h3>Chief Election Officer</h3>
                        Scott T. Nago
                    </section>

                    <section>
                        <h3>Office of Elections Address</h3>
                        <p>
                            Office of Elections <br />
                            802 Lehua Avenue <br />
                            Pearl City, Hawaii 96782
                        </p>
                        <p className="col">
                            <h4>Hours</h4>
                            7:45am - 4:30pm<br />
                            <em>Except Saturday, Sunday, and holidays</em>
                        </p>
                    </section>

                    <section>
                        <h3>Phone</h3>
                        <section  className="phone-container">
                            <div className="phone-flex">
                                <h4>Oahu</h4>
                                808-453-VOTE(8683)
                            </div>

                            <div className="phone-flex">
                                <h4>Neighbor Island Toll Free</h4>
                                1-800-442-VOTE(8683)
                            </div>

                            <div className="phone-flex">
                                <h4>TTY</h4>
                                (808)453-6150
                            </div>
                        </section>
                    </section>

                    <section>
                        <h3>Fax</h3>
                        (808)453-6006
                    </section>

                    <section>
                        <h3>Email</h3>
                        <a href="mailto:elections@hawaii.gov" target="_top">elections@hawaii.gov</a>
                    </section>

                </article>
			</div>
		);
	}
}

export default Contact;