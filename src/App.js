import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './components/Routes';


class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Router>
          <div className="nav-header">
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <h1 className="text-left navbar-text"><Link to="/">VOTENTEER</Link></h1>
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/form">Register</Link>
                  </li>
                  <li>
                    <Link to="/position">Positions</Link>
                  </li>
                  <li>
                    <Link to="/locations">Locations</Link>
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
        </Router>
      </div>
    );
  }
}

export default App;
