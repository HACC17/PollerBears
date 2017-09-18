import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Router>
          <div>
            <div className="top-container">
              <nav className="custom-nav">
                <div className="container-fluid">
                  <h1 className="text-left navbar-text"><Link to="/">VOTE<span className="the-n">N</span>TEER</Link></h1>
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/form">Register</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/faqs">FAQs</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="content-container container">
                <Routes/>
              </div>
            </div>
            <div className="footer-container">
                <div className="footer-flex">
                    <div className="footer-flex-item">
                        <h3>Election Dates</h3>
                        <p>Primary Election: August 11, 2018</p>
                        <p>General Election: November 6, 2018</p>
                    </div>
        
                    <div className="footer-flex-item">
                        <h3>Volunteer Requirements</h3>
                        <ul>
                        <li>At least 16 years of age on or before June 30 of the election year.</li>
                        <li>A registered or pre-registered voter in the State of Hawaii.</li>
                        <li>Able to read and write English.</li>
                        </ul> 
                    </div>
        
                    <div className="footer-flex-item">
                        <h3>Contact Us</h3>
                        <p>Phone: (808) 453-VOTE (8683)</p>
                        <p>E-Mail: <a href="mailto:elections@hawaii.gov" target="_top">elections@hawaii.gov</a></p>
                    </div>
                </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
