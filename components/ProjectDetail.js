import React from 'react';
import $ from "jquery";
// import React from 'react'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import AppBarSearch from '../components/Appbar';
import FontIcon from 'material-ui/FontIcon';
import Imagegrid from '../components/Imagegrid';

import Parcelinfo from '../components/Parcelinfo';
import Map from '../components/Map';
import Mapstreet from '../components/MapStreet';
import { Router, browserHistory } from 'react-router';
var WP = require( 'wpapi' );
var wp = new WP({ endpoint: 'http://10.241.104.211:8080/wp-json' });

var ProjectDetail = React.createClass ({

  getInitialState() {
    return {
      "project":{
        acf:{
          gis_lat:null,
          git_lon:null
        }
      }
    };
  },
  componentDidMount(){

  },
  render(){
    console.log(this.props);
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
      },
      mapStyle:{
        paddingLeft:0,
      }

    };
    // console.log(this.state.project);
    // setTimeout(function () {
    //   var latlng = {
    //     "lat":Number(this.state.project.acf.gis_lat),
    //     "lng":Number(this.state.project.acf.gis_lon)
    //   };
    // }, 100);

    var parcel = this.props.project;
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
            <div className="col-lg-6 col-md-6 col-xs-12"><Paper style={styles.paperStyle} zDepth={1} className="parcel-card"><Parcelinfo parcel={parcel}/></Paper></div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="row">
                  <Paper style={styles.paperStyle} zDepth={1} className="parcel-card"><Imagegrid project={this.state.project} projectID={this.props.projectID}/></Paper>
              </div>
              <div className="row">
              <div className="col-lg-6 col-md-6 col-xs-12" style={styles.mapStyle}><Paper style={styles.paperStyle} zDepth={1} className="parcel-card"><Map latlng={{
                "lat":Number(this.props.project.acf.gis_lat),
                "lng":Number(this.props.project.acf.gis_lon)
              }}/></Paper></div>
              <div className="col-lg-6 col-md-6 col-xs-12" style={styles.mapStyle}><Paper style={styles.paperStyle} zDepth={1} className="parcel-card"><Mapstreet latlng={{
                "lat":Number(this.props.project.acf.gis_lat),
                "lng":Number(this.props.project.acf.gis_lon)
              }}/></Paper></div>
              </div>
            </div>




          </div>
        </MuiThemeProvider>
      </div>
    );
  }

});
export default ProjectDetail;
