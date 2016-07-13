import { default as React, Component } from "react";

import { GoogleMap,GoogleMapLoader } from "react-google-maps";
/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class SimpleMap extends Component {
  /*
   * 1. Create a component that wraps all your map sub-components.
   */
  render() {
    /*
     * 2. Render GoogleMap component with containerProps
     */
    return (
      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: 200,
              margin:8,
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={17}
            defaultCenter={{lat: 42.3601, lng: -71.0589}}
            onClick={this.handleMapClick}>
          </GoogleMap>
        }
      />
    );
  }
}