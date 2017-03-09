import React from 'react'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';



import AppBarSearch from '../components/Appbar';
import ParcelInfo from '../components/Parcelinfo';
import GridListExampleSimple from '../components/Imagegrid';
import SampleMap from '../components/Map';
import Login from '../components/Login';
import ProjectDetailLoader from '../components/ProjectDetailLoader';
import ProjectCreate from '../components/ProjectCreate';

import { Router, Route, hashHistory,IndexRoute } from 'react-router';
import Projects from '../components/Projects';
import Root from '../components/Root';
// import App from '../components/App'
const muiTheme = getMuiTheme({
  // palette: {
  //   textColor: cyan500,
  // },
  appBar: {
    // height: 50,
  },
});
const style1 = {
  width:"100%",
  // height:891,
  marginTop: 8,
  // textAlign: 'center',
  display: 'inline-block',
  // padding:2,
  background:"#EEEEEE",
}
const App = () => (
  <div>
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBarSearch />

  </MuiThemeProvider>
  <MuiThemeProvider>
    <div className="row">
      <div className="col-lg-12 col-md-12 col-xs-12"><Paper style={style1} zDepth={1} className="parcel-card"><Projects/></Paper></div>
    </div>
  </MuiThemeProvider>
  </div>
);


var Wrapper = React.createClass({
  getInitialState:function(){
    return {
      user:""
    }
  },
  handler(newUser){
    this.setState({user:newUser});
  },
  render(){
    return(
    <div>
    <MuiThemeProvider muiTheme={muiTheme}>
      <AppBarSearch />

    </MuiThemeProvider>
    <MuiThemeProvider>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-xs-12"><Paper style={style1} zDepth={1} className="parcel-card"><Projects/></Paper></div>
      </div>
    </MuiThemeProvider>
    </div>
  )
  }

});

ReactDOM.render(
  (

  <Router history={hashHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Projects}/>
        <Route path="/project/:projectID" component={ProjectDetailLoader} user={{"username":"123"}}/>
        <Route path="/create" component={ProjectCreate}/>
    </Route>
  </Router>
  ),document.getElementById('app')
)
