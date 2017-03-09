import React from 'react';
import $ from "jquery";
// import React from 'react'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import AppBarSearch from '../components/Appbar';
import FontIcon from 'material-ui/FontIcon';
// import ReactEsriMap  from '../node_modules/react-esri-map/src/index.js';
require('leaflet');
import EsriLeaflet from 'esri-leaflet';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

// require('http://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css');
// var EsriLeftlet = require('esri-leftlet');
// import EsriLeftlet from "esri-leftlet";

import { Router, browserHistory } from 'react-router';

export default class ProjectCreate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      "project":"",
      "map": null,
    };
  }
  componentDidMount(){
    console.log(EsriLeaflet);

    var map = L.map('map').setView([42.3601, -71.0589], 22);
    EsriLeaflet.basemapLayer("Topographic").addTo(map);
    var parcel = EsriLeaflet.featureLayer({
      url: 'http://gis.cityofboston.gov/arcgis/rest/services/Parcels/Parcels16/MapServer/0',
      style: function() {
      return {
        color: '#5B7CBA',
        weight: 2
      };
    }
    }).addTo(map);
    parcel.bindPopup(function (evt) {
    return EsriLeaflet.Util.template('<p>{PID_LONG}<br>{ST_NUM}<br>{ST_NAME}</p>', evt.feature.properties);
  });
    this.setState({ map: map });

  };
  render(){

    var that = this;
    const styles = {
      paperStyle:{
        width:"100%",
        // height:891,
        marginTop: 8,
        // textAlign: 'center',
        display: 'inline-block',
        // padding:2,
        background:"#EEEEEE",
      }

    };
    var parcel = this.state.project;
    // tableContent = this.state.projects.map(function(project) {
    //   return (
    //
    //   );
    // });


    return (

      <div>
        <MuiThemeProvider>
          <AppBarSearch />

        </MuiThemeProvider>
        <MuiThemeProvider>
          <div className="row">
          <div id="map" style={{height:400,width:"80%"}}>
            { this.state.map }
          </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }

}
