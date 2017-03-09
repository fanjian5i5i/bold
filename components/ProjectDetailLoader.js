import React from 'react';
import $ from "jquery";
// import React from 'react'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import ProjectDetail from '../components/ProjectDetail';
import { Router, browserHistory } from 'react-router';

var ProjectDetailLoader = React.createClass ({
  getInitialState() {
    return {
      "project":{
        acf:null
      }
    }

  },
  componentDidMount(){
    console.log(this.props.route.user)
    // var input = $('.reactable-filter-input');
    // input.attr('placeholder') = 2;
    // console.log($('.reactable-filter-input'));
    var that = this;
    $.ajax({
          type: 'GET',
          url: 'http://localhost:3000/api/parcel/'+this.props.params.projectID,
        }).done(function(res){

          that.setState({"project":JSON.parse(res)});
          console.log(JSON.parse(res));
      });

  },
  render(){
    return (
      <ProjectDetail project={this.state.project} projectID={this.props.params.projectID}/>
    )
  }
})
export default ProjectDetailLoader;
