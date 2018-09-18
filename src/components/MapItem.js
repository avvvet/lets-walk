import React, { Component } from 'react';
import { render } from 'react-dom';
import MapApi from './MapApi';
import InfoWindow from './InfoWindow';

class MapItem extends Component {
  constructor() {
    super();
    this.createInfoWindow = this.createInfoWindow.bind(this);
    this.state = {
      marker_user : []
    }
    
  }
  
  setMarkerUser(user){
   this.setState({marker_user : user });
  }

  createInfoWindow(e, map, user) { 
    this.setMarkerUser(user);
    
    const infoWindow = new window.google.maps.InfoWindow({
        content: "<div id='infoWindow'></div>", 
        position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
    })
    infoWindow.addListener('domready', e => {
      render(<InfoWindow user = {this.state.marker_user}/>,document.getElementById('infoWindow'));
    })
    
    
    infoWindow.open(map)
  }

  render() {
    return (
      <MapApi
        id="myMap"
        options={{
          center: { lat: 39.0862785, lng: -77.1522993 },
          zoom: 17
        }}
        onMapLoad={map => {
          var bounds = new window.google.maps.LatLngBounds();
          var image = 'assets/female.png';
          
          this.props.users.forEach(user => {
            if(user.gender === "female"){
              image = 'assets/female.png';
            } else {
              image = 'assets/male.png';
            }
            var position = new window.google.maps.LatLng(this.props.lat,this.props.lat);
            bounds.extend(position);

            const marker = new window.google.maps.Marker({
                position: { lat: user.address.geo.lat, lng: user.address.geo.lng }, 
                map: map,
                icon: image,
                title: 'Hello Istanbul!'
              });
              marker.addListener('click', e => {
                this.createInfoWindow(e, map, user)
              })
            
          });
          
        }}
      />
    );
  }
}
export default MapItem;