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
import JSSocial from '../components/JSSocial';
import pic1 from '../images/pin24.png';
import pic2 from '../images/pin48.png';

const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [39.9528, -75.1638];
const zoomLevel = 12;
let contents;
let timeActivated = false;
let icon = { 'calendar-plus-o': 'left' };
const markers = [
  {
    "name":"Mililani Mauka Elementary School",
    "address":"95-1111 Makaikai St, Mililani, HI 96789",
    "lat":21.471129,
    "lng":-158.000850,
    "trainings": ["7/14/18 9:00-10:30 a.m.", "7/14/18 11:00-1:00 p.m.", "10/3/2018 6:30-830 p.m."],
    "times": [
    {
      "startTime":'2018-07-14T12:00:00-04:00',
      "endTime":'2018-07-14T13:30:00-04:00'
    },
    {
      "startTime":'2018-07-14T14:00:00-04:00',
      "endTime":'2018-07-14T16:30:00-04:00'
    },
    {
      "startTime":'2018-10-03T21:30:00-04:00',
      "endTime":'2018-10-03T23:30:00-04:00'
    }
    ]
  },
  {
    "name":"Mililani Middle School Cafeteria",
    "address":"95-1140 Lehiwa Drive Miliani, HI 96789",
    "lat":21.475665,
    "lng":-157.989612,
    "trainings": ["7/14/18 11:00-1:00 p.m.", "10/3/18 6:30-8:30 p.m.", "7/14/18 9:00-10:30 a.m."],
    "times": []
  },
  {
    "name":"Mililani High School",
    "address":"95-1200 Meheula Parkway, Mililani, HI 96789",
    "lat":21.453958,
    "lng":-158.009271
  },
  {
    "name":"Mililani Uka Elementary School",
    "address":"94-380 Kuahelani Ave, Mililani, HI 96789",
    "lat":21.437221,
    "lng":-158.014535
  },
  {
    "name":"Kipapa Elementary School",
    "address":"95-076 Kipapa Dr, Mililani, HI 96789",
    "lat":21.461902,
    "lng":-158.013009
  },
  {
    "name":"Kaiser High School",
    "address":"511 Lunalilo Home Rd, Honolulu, HI 96825",
    "lat":21.285904,
    "lng":-157.694490
  },
  {
    "name":"Koko Head Elementary School",
    "address":"189 Lunalilo Home Rd, Honolulu, HI 96825",
    "lat":21.274238,
    "lng":-157.704898,
    "trainings":["6/16/18 11:00-1:00 p.m.", "10/2/18 6:30-8:00 p.m.", "6/16/18 9:00-10:30 a.m."],
    "times":[]
  },
  {
    "name":"Aina Haina Elementary School",
    "address":"801 W Hind Dr, Honolulu, HI 96821",
    "lat":21.279501,
    "lng":-157.756516
  },
  {
    "name":"Niu Valley Middle School",
    "address":"310 Halemaumau St, Honolulu, HI 96821",
    "lat":21.285370,
    "lng":-157.739948
  },
  {
    "name":"Kalani High School",
    "address":"4680 Kalanianaole Hwy, Honolulu, HI 96821",
    "lat":21.278632,
    "lng":-157.773869
  },
  {
    "name":"Ewa Elementary School",
    "address":"91-1280 Renton Rd, Ewa Beach, HI 96706",
    "lat":21.344594,
    "lng":-158.034659,
    "trainings":["10/17/18 6:30-8:00 p.m.", "7/17/18 6:30-8:00 p.m."],
    "times":[]
  },
  {
    "name":"Campbell High School",
    "address":"91-980 North Rd, Ewa Beach, HI 96706",
    "lat":21.315785,
    "lng":-158.007437
  },
  {
    "name":"Ewa Beach Elementary School",
    "address":"91-740 Papipi Rd, Ewa Beach, HI 96706",
    "lat":21.314889,
    "lng":-158.015140
  },
  {
    "name":"Kapolei Elementary School",
    "address":"91-1119 Kamaaha Loop, Kapolei, HI 96707",
    "lat":21.334125,
    "lng":-158.064334
  },
  {
    "name":"Kapolei High School",
    "address":"91-5007 Kapolei Parkway, Kapolei, HI 96707",
    "lat":21.327907,
    "lng":-158.068294,
    "trainings":["6/30/18 11:00-1:00 p.m.", "6/30/18 9:00-10:30 a.m."],
    "times":[]
  },
  {
    "name":"Kailua Elementary School",
    "address":"315 Kuulei Rd, Kailua, HI 96734",
    "lat":21.395061,
    "lng":-157.741264
  },
  {
    "name":"Enchanted Lake Elementary School",
    "address":"770 Keolu Dr, Kailua, HI 96734",
    "lat":21.383008,
    "lng":-157.732009
  },
  {
    "name":"Lanikai Elementary School",
    "address":"140 Alala Rd, Kailua, HI 96734",
    "lat":21.393803,
    "lng":-157.725869
  },
  {
    "name":"Kalaheo High School",
    "address":"730 Iliaina St, Kailua, HI 96734",
    "lat":21.409131,
    "lng":-157.756951
  },
  {
    "name":"Keolu Elementary School",
    "address":"1416 Keolu Dr, Kailua, HI 96734",
    "lat":21.371824,
    "lng":-157.736039
  },
  {
    "name":"Ahuimanu Elementary School",
    "address":"47-470 Hui Aeko Pl, Kaneohe, HI 96744",
    "lat":21.435171,
    "lng":-157.830565
  },
  {
    "name":"Benjamin Parker Elementary School",
    "address":"45-259 Waikalua Rd, Kaneohe, HI 96744",
    "lat":21.413928,
    "lng":-157.798498
  },
  {
    "name":"State Capitol Auditorium",
    "address":"415 South Beretania Street Honolulu, HI 96813",
    "lat":21.307195,
    "lng":-157.857398,
    "trainings":["7/12/18 6:00-7:00 p.m.", "7/30/18 6:00-8:00 p.m.", "8/2/18 6:00-8:00 p.m.", "10/15/18 6:00-8:00 p.m.", "6/19/18 6:00-7:00 p.m.", "7/17/18 6:00-7:00 p.m.", "7/21/18 9:00-10:00 a.m.", "7/24/18 6:00-7:00 p.m.", "6/21/18 6:00-7:00 p.m.", "7/26/18 6:00-7:00 p.m.", "7/19/18 6:00-7:00 p.m.", "6/26/18 6:30-8:30 p.m.", "8/1/18 6:30-8:00 p.m."],
    "times":[]
  },
  {
    "name":"State Capitol Senate Conference Room 016",
    "address":"415 South Beretania Street Honolulu, HI 96813",
    "lat":21.307195,
    "lng":-157.857398,
    "trainings":["7/23/18 6:00-8:00 p.m."],
    "times":[]
  },
  {
    "name":"Koko Head Elementary School Cafeteria",
    "address":"189 Lunalilo Home Road Honolulu, HI 96825",
    "lat":21.274238,
    "lng":-157.704898,
    "trainings":["6/16/18 11:00-1:00 p.m.", "10/2/18 6:30-8:00 p.m.", "6/16/18 9:00-10:30 a.m."],
    "times":[]
  },
  {
    "name":"Kaneohe Elementary School Cafeteria",
    "address":"45-495 Kamehameha Highway Kaneohe, HI 96744",
    "lat":21.395919,
    "lng":-157.795851,
    "trainings":["10/9/18 6:30-8:30 p.m.", "6/23/18 11:00-1:00 p.m.", "6/23/18 9:00-10:30 a.m."],
    "times":[]
  },
  {
    "name":"Waikiki Elementary School Cafeteria",
    "address":"3710 Leahi Avenue Honolulu, HI 96815",
    "lat":21.268166,
    "lng":-157.814493,
    "trainings":["10/13/18 11:00-1:00 p.m.", "7/18/18 6:30-8:30 p.m.", "10/13/18 9:00-10:30 a.m.", "6/20/18 6:30-8:00 p.m."],
    "times":[]
  },
  {
    "name":"Pearl City Highlands Elementary School Cafeteria",
    "address":"1419 Waimano Home Road Pearl City, HI 96782",
    "lat":21.403286,
    "lng":-157.965311,
    "trainings":["7/26/18 6:00-7:00 p.m.", "6/14/18 6:30-8:00 p.m.", "10/24/18 6:30-8:00 p.m."],
    "times":[]
  },
  {
    "name":"Lanakila Elementary School Cafeteria",
    "address":"717 North Kuakini Street Honolulu, HI 96817",
    "lat":21.326487,
    "lng":-157.860453,
    "trainings":["10/20/18 11:00-1:00 p.m.", "7/21/18 11:00-1:00 p.m.", "7/21/18 9:00-10:30 a.m.", "10/20/18 9:00-10:30 a.m.", "7/2/18 6:30-8:00 p.m."],
    "times":[]
  },
  {
    "name":"Kapolei High School Cafeteria",
    "address":"91-5007 Kapolei Parkway Kapolei, HI 96707",
    "lat":21.327907,
    "lng":-158.068294,
    "trainings":["6/30/18 11:00-1:00 p.m.", "6/30/18 9:00-10:30 a.m."],
    "times":[]
  },
  {
    "name":"Manana Elementary School Cafeteria",
    "address":"1147 Kumano Street Pearl City, HI 96782",
    "lat":21.408343,
    "lng":-157.971362,
    "trainings":["7/5/18 6:30-8:30 p.m.", "7/25/18 6:30-8:00 p.m."],
    "times":[]
  },
  {
    "name":"Kaneohe Elementary School Cafeteria",
    "address":"45-495 Kamehameha Hwy, Kaneohe, HI 96744",
    "lat":21.395919,
    "lng":-157.795851,
    "trainings":["10/9/18 6:30-8:30 p.m.", "6/23/18 11:00-1:00 p.m.", "6/23/18 9:00-10:30 a.m."],
    "times":[]
  },
  {
    "name":"Castle High School",
    "address":"45-386 Kaneohe Bay Dr, Kaneohe, HI 96744",
    "lat":21.403569,
    "lng":-157.794145
  },
  {
    "name":"Maunawili Elementary School",
    "address":"1465 Ulupii St, Kailua, HI 96734",
    "lat":21.376900,
    "lng":-157.752160
  },
  {
    "name":"Nanaikapono Elementary School",
    "address":"89-153 Mano Ave, Waianae, HI 96792",
    "lat":21.383506,
    "lng":-158.143568
  },
  {
    "name":"Maili Elementary School",
    "address":"87-360 Kulaaupuni St, Waianae, HI 96792",
    "lat":21.420045,
    "lng":-158.172058
  },
  {
    "name":"Waianae Intermediate School",
    "address":"85-626 Farrington Highway, Waianae, HI 96792",
    "lat":21.452113,
    "lng":-158.191583
  },
  {
    "name":"Makaha Elementary School",
    "address":"84-200 Ala Naauao Plaza, Waianae, HI 96792",
    "lat":21.469728,
    "lng":-158.212216
  },
  {
    "name":"Kaimuki High School",
    "address":"2705 Kaimuki Avenue, Honolulu, HI 96816",
    "lat":21.286361,
    "lng":-157.816665
  },
  {
    "name":"Washington Middle School",
    "address":"1633 S King St, Honolulu, HI 96826",
    "lat":21.295680,
    "lng":-157.834746,
    "trainings":["10/22/18 6:30-8:00 p.m."],
    "times":[]
  },
  {
    "name":"Stevenson Middle School",
    "address":"1202 Prospect St, Honolulu, HI 96822",
    "lat":21.310323,
    "lng":-157.840181
  },
  {
    "name":"Mckinley High School",
    "address":"1039 S King St, Honolulu, HI 96814",
    "lat":21.298521,
    "lng":-157.848445
  },
  {
    "name":"Central Middle School",
    "address":"1302 Queen Emma St, Honolulu, HI 96813",
    "lat":21.311636,
    "lng":-157.856622
  },
  {
    "name":"Kapalama Elementary School",
    "address":"1601 N School St, Honolulu, HI 96817",
    "lat":21.334960,
    "lng":-157.869371
  },
  {
    "name":"Farrington High School",
    "address":"1564 North King Street, Honolulu, HI 96817",
    "lat":21.330631,
    "lng":-157.873315
  },
  {
    "name":"Radford High School",
    "address":"4361 Salt Lake Blvd, Honolulu, HI 96818",
    "lat":21.359494,
    "lng":-157.927863
  },
  {
    "name":"Wahiawa Middle School",
    "address":"275 Rose St, Wahiawa, HI 96786",
    "lat":21.493666,
    "lng":-158.018990
  },
  {
    "name":"Leilehua High School",
    "address":"1515 California Ave, Wahiawa, HI 96786",
    "lat":21.500464,
    "lng":-158.012126
  },
  {
    "name":"Haleiwa Elementary School",
    "address":"66-505 Haleiwa Rd, Haleiwa, HI 96712",
    "lat":21.585013,
    "lng":-158.114041
  },
  {
    "name":"Sunset Beach Elementary School",
    "address":"59 Kamehameha Hwy, Haleiwa, HI 96712",
    "lat":21.675599,
    "lng":-158.038423
  },
  {
    "name":"Kahuku High/Intermediate School",
    "address":"56-490 Kamehameha Hwy, Kahuku, HI 96731",
    "lat":21.675916,
    "lng":-157.947312
  },
  {
    "name":"Pearl Ridge Elementary School",
    "address":"98-940 Moanalua Rd, Aiea, HI 96701",
    "lat":21.388868,
    "lng":-157.944840
  },
  {
    "name":"Waimalu Elementary School",
    "address":"98-825 Moanalua Rd, Aiea, HI 96701",
    "lat":21.390366,
    "lng":-157.949506
  },
  {
    "name":"Lehua Elementary School",
    "address":"791 Lehua Ave, Pearl City, HI 96782",
    "lat":21.388716,
    "lng":-157.971889
  },
  {
    "name":"August Ahrens Elementary School",
    "address":"94-1170 Waipahu St, Waipahu, HI 96797",
    "lat":21.392808,
    "lng":-158.002835
  },
  {
    "name":"Waipahu High School",
    "address":"94-1211 Farrington Hwy, Waipahu, HI 96797",
    "lat":21.388276,
    "lng":-157.993345
  },
  {
    "name":"Waipahu Elementary School",
    "address":"94-465 Waipahu St, Waipahu, HI 96797",
    "lat":21.384982,
    "lng":-158.016032
  },
  {
    "name":"Kaleiopuu Elementary School",
    "address":"94-665 Kaaholo St, Waipahu, HI 96797",
    "lat":21.391097,
    "lng":-158.027928
  },
  {
    "name":"Mauka Lani Elementary School",
    "address":"92-1300 Panana St, Kapolei, HI 96707",
    "lat":21.358394,
    "lng":-158.083459
  }
];

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
    map.addLayer( this.leafletElement );
}

  render(){
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

export default Livemap;
