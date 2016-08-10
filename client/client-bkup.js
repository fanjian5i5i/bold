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

import { Router, Route, hashHistory } from 'react-router'
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
  height:891,
  marginTop: 8,
  // textAlign: 'center',
  display: 'inline-block',
  padding:8,
  background:"#EEEEEE",
}
const style2 = {
  width:"100%",
  height:891,
  marginTop: 8,
  background:"#EEEEEE",
  // textAlign: 'center',
  display: 'inline-block',
}
const style3 = {
  width:"100%",
  marginTop: 8,
  background:"#EEEEEE",
  // textAlign: 'center',
  display: 'inline-block',
}
const App = () => (
  <div>
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBarSearch />

  </MuiThemeProvider>
  <MuiThemeProvider>
    <div className="row">
      <div className="col-lg-9 col-md-9 col-sm-12"><Paper style={style1} zDepth={1} className="parcel-card"><ParcelInfo /></Paper></div>
      <div className="col-lg-3 col-md-3 col-sm-12">
        <Paper style={style2} zDepth={1} >
          <GridListExampleSimple/>
          <SampleMap/>
        </Paper>
      </div>
    </div>
  </MuiThemeProvider>
  </div>
);

ReactDOM.render(
  (
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/login" component={Login}/>
  </Router>
  ),document.getElementById('app')
)
