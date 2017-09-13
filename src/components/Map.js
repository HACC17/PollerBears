import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import AddToCalendar from 'react-add-to-calendar';
import Leaflet from 'leaflet';
import $ from 'jquery';
import axios from 'axios';
// import markerClusters from 'leaflet.markercluster';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { MapLayer } from 'react-leaflet';
import pic1 from '../images/pin24.png';
import pic2 from '../images/pin48.png';

// require('leaflet.markercluster');

const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [39.9528, -75.1638];
const zoomLevel = 12;
let contents;
let timeActivated = false;
let icon = { 'calendar-plus-o': 'left' };


let event = {
  title: 'Volunteer Training',
  description: 'Volunteer Training Again!',
  location: '',
  startTime: '2016-09-16T20:15:00-04:00',
  endTime: '2016-09-16T21:45:00-04:00'
}

class Livemap extends Component{
  componentWillMount() {
    this.leafletElement = Leaflet.markerClusterGroup();
  }

  componentDidMount(){
    let map = Leaflet.map( ReactDOM.findDOMNode(this), {
      center: [21.307195, -157.857398],
      minZoom: 5,
      zoom: 10
    });
    Leaflet.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
     subdomains: ['a','b','c']
    }).addTo( map );

    // let myURL = $( 'script[src$="Map.js"]' ).attr( 'src' ).replace( 'Map.js', '' );

    let myIcon = Leaflet.icon({
      iconUrl: pic1,
      iconRetinaUrl: pic2,
      iconSize: [29, 24],
      iconAnchor: [9, 21],
      popupAnchor: [-130, 5]
    });

    // let markerClusters = Leaflet.markerClusterGroup();
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
    axios.get("http://localhost3001/election").then(function(markers) {
      for (let i = 0; i < markers.length; i++){
        let h5 = Leaflet.DomUtil.create('h5', 'name');
        h5.innerHTML = markers[i].name;
        let span = Leaflet.DomUtil.create('span', 'address');
        span.innerHTML = markers[i].address;
        let div = Leaflet.DomUtil.create('div', 'mainDiv');
        div.appendChild(h5);
        div.appendChild(span);
        if (markers[i].trainings){
          for (let j = 0; j < markers[i].trainings.length; j++){
            let emptySpan = Leaflet.DomUtil.create('h5', 'emptySpan');
            let mainButton = Leaflet.DomUtil.create('button', 'email');
            mainButton.innerHTML = markers[i].trainings[j];
            mainButton.onclick = function(){
                modal.style.display = "block";
                contents = this.innerHTML;
                event.location= markers[i].address;
                event.startTime = markers[i].times[j].startTime;
                event.endTime = markers[i].times[j].endTime;
            }
            div.appendChild(mainButton);
            div.appendChild(emptySpan);
          }
        }
        let m = Leaflet.marker( [markers[i].lat, markers[i].lng], {icon: myIcon}).bindPopup(div);
        this.leafletElement.addLayer( m );
      }
    });
    map.addLayer( this.leafletElement );
}

  render(){
    $(document).ready(function(){
      let from,to,subject,text;
      $("#send_email").click(function(){
        to=$("#to").val();
        subject="Thank you for volunteering with Office of Elections";
        text="You have volunteered at...";
        $("#message").text("Sending E-mail...Please wait");
        $.get("http://localhost:3000/send",{to:to,subject:subject,text:text},function(data){
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
            <AddToCalendar event={event} buttonTemplate={icon}/>
            <span id="message"></span>
          </div>
          </div>
        </div>
      </div>
    );
}
}

export default Livemap;
