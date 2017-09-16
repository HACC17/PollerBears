import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
  console.log(sessionStorage.getItem({}));
    return (
        <div className="home-text">
            <h2>More Than a Voter, More Than a Volunteer,</h2>
            <h1>Be a <span className="app-name">Votenteer</span></h1>
            <button className="btn btn-lg center home-reg-btn"><Link to="/register">Register Today</Link></button>
            <p>Election Day Officials assist voters, provide operational support, and ensure the integrity of the voting process. Volunteers gain first-hand knowledge and experience in the electoral process while serving their community. Your help is needed, so sign up today!</p>

        </div>
    );
  }
}

export default Home;
