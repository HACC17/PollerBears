import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './components/Routes';


class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Router>
          <div className="nav-header">
            <div>
              <h1><Link to="/">VOTENTEER</Link></h1>
              <nav>
                <ul>
                  <li>
                    <Link to="/form">Forms</Link>
                  </li>
                  <li>
                    <Link to="/locations">Locations</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/faqs">FAQs</Link>
                  </li>
                  <li>
                    <Link to="/register">register</Link>
                  </li>
                </ul>
              </nav>
            </div>
              <div className="content-container">
                <Routes/>
              </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
