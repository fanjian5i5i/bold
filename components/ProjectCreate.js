import React from 'react';
import $ from "jquery";
// import React from 'react'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import AppBarSearch from '../components/Appbar';
import FontIcon from 'material-ui/FontIcon';
import ProjectSearch from './ProjectCreateSearch';

import { Router, browserHistory } from 'react-router';

export default class ProjectCreate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      "project":"",
    };
  }
  componentDidMount(){
    

  };
  render(){

    var that = this;
    const style = {
      width:"100%",
      // height:891,
      marginTop: 8,
      // textAlign: 'center',
      display: 'inline-block',
      // padding:2,
      background:"#EEEEEE",
    }
    var parcel = this.state.project;

    return (

      <div>
        <MuiThemeProvider>
          <AppBarSearch />

        </MuiThemeProvider>
        <MuiThemeProvider>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xs-12"><Paper style={style} zDepth={1} className="parcel-card"><ProjectSearch/></Paper></div>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }

}
