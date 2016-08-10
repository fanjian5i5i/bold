import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SideBar from './Sidemenu';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {grey500} from 'material-ui/styles/colors';
import GoogleLogin from 'react-google-login';
import $ from "jquery";
var auth = require('../server/auth/auth.json');
import { browserHistory } from 'react-router';
require("../client/app.css");
// import Auth from 'json!./../server/auth/auth.json';

injectTapEventPlugin();
const style = {
    margin: 10,
    height: 42,
    width: 220,
    backgroundColor: 'white',
    color: 'white'
  };
const iconStyles = {
      padding: "10 0 10 20",
};
const rowStyle = {
  marginRight: 0
}

const searchStyle = {
    position: "relative",
    marginTop: 25,
    top: -25,
    WebkitBoxFlex: 1,
    flex: "1 1 auto",
    order: 2,
    outline: "none",
    border: "none",
    padding: 13,
    borderRadius: 2,
};


const responseGoogle = (response) => {
  console.log(response);
  // console.log($.ajax());
  $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/login',
        data: {email:response.getBasicProfile().getEmail()},
        contentType: "application/json",
        statusCode: {
          404: function(){
            alert("user not found");
          },
          200: function(){
            // alert("success");
            browserHistory.push('/#/login');
            // window.location.href("http://boston.gov");
          }
        }

    });
}

const AppBarSearch = () => (
  <AppBar
    zDepth={1}
    title={
      <Paper style={style} zDepth={1} >
          <input type="text" placeholder="Search" style={searchStyle}/>
      </Paper>

    }
    style={{"backgroundColor":"#f25520"}}
    iconElementLeft={<SideBar/>}
    iconElementRight={
      <GoogleLogin
          clientId={auth.google.clientid}
          buttonText={<span className="loginText">login</span>}
          redirectUri={auth.google.callbackurl}
          callback={responseGoogle}
          cssClass="loginBtn"/>

      // <IconMenu
      //   iconButtonElement={
      //     <IconButton><MoreVertIcon /></IconButton>
      //   }
      //   targetOrigin={{horizontal: 'right', vertical: 'top'}}
      //   anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      // >
      //   <MenuItem primaryText="Lease Admin" />
      //   <MenuItem primaryText="Dashboard" />
      //   <MenuItem primaryText="Analytics" />
      //   <MenuItem primaryText="Reports" />
      //   <MenuItem primaryText="Sign out" />
      // </IconMenu>
    }
  >

  </AppBar>
);

export default AppBarSearch;
