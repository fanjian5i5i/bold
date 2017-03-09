import { default as React, Component } from "react";

import { GoogleMap,GoogleMapLoader,Marker } from "react-google-maps";
import $ from "jquery";
// import InfoWindow from "react-google-maps/lib//InfoWindow";
/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class SimpleMap extends Component {
  /*
   * 1. Create a component that wraps all your map sub-components.
   */
   getInitialState(){
     return{
       latlng:{
         lat:null,
         lng:null
       }
     }
   }
  componentDidMount(){
    console.log(this.props);
    var that = this;
    $.ajax({
          type: 'GET',
          url: 'http://s21451.p611.sites.pressdns.com/wp-json/acf/v2/parcels/'+this.props.projectID,
        }).done(function(res){
          console.log(res)
          var latlng ={
            lat:Number(res.acf.gis_lat),
            lng:Number(res.acf.gis_lon)
          }
          that.setState({"latlng":latlng});
          // console.log(that.state);
      });
  }
  render() {
    /*
     * 2. Render GoogleMap component with containerProps
     */
    // var latlng = this.state.latlng ? this.state.latlng : {lat:0,lng:0}
    var latlng = this.props.latlng ? this.props.latlng : {lat:0,lng:0}

    return (
      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: 380,
              margin:8,
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={17}
            defaultCenter={latlng}
            onClick={this.handleMapClick}>
            <Marker
                  position={latlng} >
            </Marker>
          </GoogleMap>
        }
      />
    );
  }
}
