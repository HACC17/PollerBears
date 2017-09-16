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
				<div className="row">
					<div className="capitol-position col-sm-4">
						<p><strong>Capitol Title 1</strong></p>
  					<p>Insert Job Description Here</p>
            <p>Stipend: $85</p>
            <button className="btn">Select</button>
					</div>
          <div className="capitol-position col-sm-4">
            <p><strong>Capitol Title 2</strong></p>
            <p>Insert Job Description Here</p>
            <p>Stipend: $85</p>
            <button className="btn">Select</button>
          </div>
          <div className="capitol-position col-sm-4">
            <p><strong>Capitol Title 3</strong></p>
            <p>Insert Job Description Here</p>
            <p>Stipend: $85</p>
            <button className="btn">Select</button>
          </div>
        </div>
        <div className="row">
          <div className="capitol-position col-sm-4">
            <p><strong>Capitol Title 4</strong></p>
            <p>Insert Job Description Here</p>
            <p>Stipend: $85</p>
            <button className="btn">Select</button>
          </div>
          <div className="capitol-position col-sm-4">
            <p><strong>Capitol Title 5</strong></p>
            <p>Insert Job Description Here</p>
            <p>Stipend: $85</p>
            <button className="btn">Select</button>
          </div>
          <div className="capitol-position col-sm-4">
            <p><strong>Capitol Title 6</strong></p>
            <p>Insert Job Description Here</p>
            <p>Stipend: $85</p>
            <button className="btn">Select</button>
          </div>
        </div>
        <div className="row">
          <div className="capitol-position col-sm-4">
            <p><strong>Capitol Title 7</strong></p>
            <p>Insert Job Description Here</p>
            <p>Stipend: $85</p>
            <button className="btn">Select</button>
          </div>
          <div className="capitol-position col-sm-4">
            <p><strong>Capitol Title 8</strong></p>
            <p>Insert Job Description Here</p>
            <p>Stipend: $85</p>
            <button className="btn">Select</button>
          </div>
          <div className="capitol-position col-sm-4">
            <p><strong>Capitol Title 9</strong></p>
            <p>Insert Job Description Here</p>
            <p>Stipend: $85</p>
            <button className="btn">Select</button>
          </div>
        </div>
        <div className="row">
          <div className="capitol-position col-sm-4">
            <p><strong>Capitol Title 10</strong></p>
            <p>Insert Job Description Here</p>
            <p>Stipend: $85</p>
            <button className="btn">Select</button>
          </div>
          <div className="capitol-position col-sm-4">
            <p><strong>Capitol Title 11</strong></p>
            <p>Insert Job Description Here</p>
            <p>Stipend: $85</p>
            <button className="btn">Select</button>
          </div>
        </div>
        <div className="row">
          <div className="capitol-position col-sm-4">
            <p><strong>Polling Title 1</strong></p>
            <p>Insert Job Description Here</p>
            <p>Stipend: $85</p>
            <button className="btn">Select</button>
          </div>
          <div className="capitol-position col-sm-4">
            <p><strong>Polling Title 2</strong></p>
            <p>Insert Job Description Here</p>
            <p>Stipend: $85</p>
            <button className="btn">Select</button>
          </div>
          <div className="capitol-position col-sm-4">
            <p><strong>Polling Title 3</strong></p>
            <p>Insert Job Description Here</p>
            <p>Stipend: $85</p>
            <button className="btn">Select</button>
          </div>
        </div>
        <div className="row">
          <div className="capitol-position col-sm-4">
            <p><strong>Polling Title 4</strong></p>
            <p>Insert Job Description Here</p>
            <p>Stipend: $85</p>
            <button className="btn">Select</button>
          </div>
          <div className="capitol-position col-sm-4">
            <p><strong>Polling Title 5</strong></p>
            <p>Insert Job Description Here</p>
            <p>Stipend: $85</p>
            <button className="btn">Select</button>
          </div>
          <div className="capitol-position col-sm-4">
            <p><strong>Polling Title 6</strong></p>
            <p>Insert Job Description Here</p>
            <p>Stipend: $85</p>
            <button className="btn">Select</button>
          </div>
        </div>
			</div>
		)
	}
}

export default PositionDescription;