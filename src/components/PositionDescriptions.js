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
			<div className="position-description">
        <fieldset id="volunteer-positions">
  				<div className="row">
  					<div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="volunteer-positions" /> State Capitol Position 1
  					</div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="volunteer-positions" /> State Capitol Position 2
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="volunteer-positions" /> State Capitol Position 3
            </div>
          </div>
          <div className="row">
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="volunteer-positions" /> State Capitol Position 4
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="volunteer-positions" /> State Capitol Position 5
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="volunteer-positions" /> State Capitol Position 6
            </div>
          </div>
          <div className="row">
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="volunteer-positions" /> State Capitol Position 7
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="volunteer-positions" /> State Capitol Position 8
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="volunteer-positions" /> State Capitol Position 9
            </div>
          </div>
          <div className="row">
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="volunteer-positions" /> State Capitol Position 10
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="volunteer-positions" /> State Capitol Position 11
            </div>
          </div>
          <div className="row">
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="volunteer-positions" /> Polling Site Position 1
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="volunteer-positions" /> Polling Site Position 2
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="volunteer-positions" /> Polling Site Position 3
            </div>
          </div>
          <div className="row">
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="volunteer-positions" /> Polling Site Position 4
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="volunteer-positions" /> Polling Site Position 5
            </div>
            <div className="capitol-position col-sm-4">
              <input type="radio" name="position" value="volunteer-positions" /> Polling Site Position 6
            </div>
          </div>
        </fieldset>
			</div>
		)
	}
}

export default PositionDescription;