import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import AddToCalendar from 'react-add-to-calendar';
import Leaflet from 'leaflet';
import $ from 'jquery';
import axios from 'axios';
import { fetchPositions, fetchTrainings } from '../actions/index.js';
// import { fetchTrainings } from '../actions/index.js';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { MapLayer } from 'react-leaflet';
import JSSocial from '../components/JSSocial';
import pic1 from '../images/pin24.png';
import pic2 from '../images/pin48.png';
const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [39.9528, -75.1638];
const zoomLevel = 12;
let contents;
let map = null;
let m = null;
let test;
let statePosition;
let mapHasBeenCreated = false;
let timeActivated = false;
let icon = { 'calendar-plus-o': 'left' };
let mapMarkers = [];
const markers = [
  {
    "name":"Mililani Mauka Elementary School",
    "address":"95-1111 Makaikai St, Mililani, HI 96789",
    "lat":21.471129,
    "lng":-158.000850,
    "trainings": ["7/14/18 9:00-10:30 a.m.", "7/14/18 11:00-1:00 p.m.", "10/3/2018 6:30-830 p.m."],
    "times": [
    {
      "startTime":'2018-07-14T09:00:00-07:00',
      "endTime":'2018-07-14T10:30:00-07:00'
    },
    {
      "startTime":'2018-07-14T14:00:00',
      "endTime":'2018-07-14T16:30:00'
    },
    {
      "startTime":'2018-10-03T21:30:00',
      "endTime":'2018-10-03T23:30:00'
    }
    ]
  }
];

let event = {
  title: 'Volunteer Training',
  description: 'Volunteer Training Again!',
  location: '',
  startTime: '2016-09-16T20:15:00',
  endTime: '2016-09-16T21:45:00'
}

const mapStateToProps = (state) => {
  // console.log(state.trainingData[1]);
  test = state.trainingData[1];
  statePosition = state.form.position;
  return {...state};
}


class Livemap extends Component{
  constructor (props){
    super(props);
    this.createMap = this.createMap.bind(this);
  }

  fetchPos(data){
    axios({
      method: 'GET',
      url: "http://localhost:3001/training/",
      responseType: 'json'
    })
      .then(function(response){
        console.log('fetch pos res', response.data);
        mapMarkers = response.data;
        // dispatch(setPosition(response.position));
      })
  }

  componentWillMount() {
    this.leafletElement = Leaflet.markerClusterGroup();
  }

  componentDidMount(){
    this.props.fetchTrainings("http://localhost:3001/training");
    this.fetchPos();
    // console.log(this.props.trainingData);

  }

  componentDidUpdate(){
    // map.remove();
    console.log(statePosition);
    this.createMap();
  }

  createMap(){
    if (mapHasBeenCreated) {
      this.leafletElement = Leaflet.markerClusterGroup();
      map.removeLayer(this.leafletElement);
      map.invalidateSize();
      map.eachLayer(function (layer) {
        map.removeLayer(layer);
      });
      map.off();
      map.remove(); // should remove the map from UI and clean the inner children of DOM element
      mapHasBeenCreated = false;
    }
    map = Leaflet.map( ReactDOM.findDOMNode(this), {
      center: [21.49332, -157.99164],
      minZoom: 10,
      maxZoom: 14,
      zoom: 10,
      setView: true
    });

    Leaflet.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
     subdomains: ['a','b','c']
    }).addTo( map );

    let myIcon = Leaflet.icon({
      iconUrl: pic1,
      iconRetinaUrl: pic2,
      iconSize: [29, 24],
      iconAnchor: [9, 21],
      popupAnchor: [-130, 5]
    });

    let modal = document.getElementById('myModal');
    // console.log(modal);
    // Get the <span> element that closes the modal
    let otherSpan = document.getElementsByClassName("close")[0];

    // When the user clicks on <otherSpan> (x), close the modal
    otherSpan.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    for (let i = 1; i < mapMarkers.length; i++){
      let trainingAddress = mapMarkers[i].address + ", " + mapMarkers[i].city + ", HI " + mapMarkers[i].zip;
      let h4 = Leaflet.DomUtil.create('h4', 'position');
      h4.innerHTML = mapMarkers[i].training;
      let span = Leaflet.DomUtil.create('span', 'address');
      span.innerHTML = trainingAddress;
      let h5 = Leaflet.DomUtil.create('h5', 'site');
      h5.innerHTML = mapMarkers[i].site;
      let div = Leaflet.DomUtil.create('div', 'mainDiv');
      div.appendChild(h4);
      div.appendChild(h5);
      div.appendChild(span);
      
      // console.log("Training " + mapMarkers[i].training);
      // console.log("stateeePos " + statePosition);
      if (mapMarkers[i].training.includes(statePosition)){
        console.log("yes");
        let emptySpan = Leaflet.DomUtil.create('h5', 'emptySpan');
        let mainButton = Leaflet.DomUtil.create('button', 'email');
        mainButton.innerHTML = mapMarkers[i].date + " " + mapMarkers[i].time;
        mainButton.onclick = function(){
            modal.style.display = "block";
            contents = this.innerHTML;
            event.location = trainingAddress;
            console.log(mapMarkers[i]);
            let isoDate = mapMarkers[i].date.replace(/(..).(..).(....)/, "$3-$1-$2");
            event.startTime = isoDate + mapMarkers[i].isoTime.startTime;
            event.endTime = isoDate + mapMarkers[i].isoTime.endTime;
            console.log(event);
        }
        
        div.appendChild(mainButton);
        div.appendChild(emptySpan);
        let numLat = Number(mapMarkers[i].coordinates.lat);
        let numLong = Number(mapMarkers[i].coordinates.long);
        m = Leaflet.marker( [numLat, numLong], {icon: myIcon}).bindPopup(div);
        this.leafletElement.addLayer( m );
        }
    }

    map.addLayer( this.leafletElement );
    mapHasBeenCreated = true;
  }

  render(){
    // console.log('this', this);
    $(document).ready(function(){
      let from,to,subject,text;
      $("#send_email").click(function(){
        to=$("#to").val();
        subject="Thank you for volunteering with Office of Elections";
        text="You have volunteered at..." + event.location;
        $("#message").text("Sending E-mail...Please wait");
        $.get("http://localhost:8000/send",{to:to,subject:subject,text:text},function(data){
          if(data=="sent")
          {
              $("#message").empty().html("Email is been sent at "+to+" . Please check inbox!");
          }
        });
      });
    });
    return (
      <div>
        <div className='map'></div>
        <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <div id="container">
            <h1>Info to send to user</h1>
            <input id="to" type="text" placeholder="Enter E-mail ID where you want to send" />
            <button id="send_email">Send Email</button>
            <JSSocial/>
            <AddToCalendar event={event} buttonTemplate={icon}/>
            <span id="message"></span>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchTrainings: (url) => dispatch(fetchTrainings(url)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Livemap);
