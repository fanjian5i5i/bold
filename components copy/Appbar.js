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
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import $ from "jquery";
var auth = require('../server/auth/auth.json');
import { Link, browserHistory } from 'react-router';
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
  var that = this;
  $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/login',
        headers: {
          "Authorization": "Basic " + Base64.encode(response.getBasicProfile().getEmail()+":123")
        },
        statusCode: {
          404: function(){
            alert("user not found");
          },
          200: function(res){
            console.log(res);
            that.setState({"loginText":"res"})
          }
        }

    });
}

export default class AppBarSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginText:"",
      loggedIn: false
    };
  };
  componentDidMount(){
    var that = this;
    // $.ajax({
    //       type: 'GET',
    //       url: 'http://localhost:3000/api/login',
    //       // headers: {
    //       //   "Authorization": "Basic " + Base64.encode(response.getBasicProfile().getEmail()+":123")
    //       // },
    //       username:response.getBasicProfile().getEmail(),
    //       password:123,
    //       statusCode: {
    //         404: function(){
    //           alert("user not found");
    //         },
    //         200: function(res){
    //           console.log(res);
    //           that.setState({"loginText":"res"})
    //         }
    //       }
    //
    //   });
    $.ajax({
          type: 'GET',
          url: 'http://localhost:3000/api/isloggedin',
          username:that.state.loginText,
          password:123
      })
      .done(function( data ) {
        console.log(data);
        that.setState({loginText:data.email,loggedIn:true})
        // that.setState({"loginText":})
      });
  };
  gotoHome(e){
    e.preventDefault;
    browserHistory.push('/');
    $.ajax({
          type: 'GET',
          url: 'http://localhost:3000/api/logout',
          statusCode: {
            200: function(){
              that.setState({loggedIn:false})
            }
          }

      });
    window.location.reload();
  };
  logOut(e){
    var that = this;
    e.preventDefault;
    $.ajax({
          type: 'GET',
          url: 'http://localhost:3000/api/logout',
          statusCode: {
            200: function(){
              that.setState({loggedIn:false})
            }
          }

      });
  }
  responseGoogle(response) {
    var that = this;
    $.ajax({
          type: 'GET',
          url: 'http://localhost:3000/api/login',
          // headers: {
          //   "Authorization": "Basic " + Base64.encode(response.getBasicProfile().getEmail()+":123")
          // },
          username:response.getBasicProfile().getEmail(),
          password:123,
          statusCode: {
            404: function(){
              alert("user not found");
            },
            200: function(res){
              console.log(res);
              that.setState({"loginText":res.email,loggedIn:true})
            }
          }

      });
  }
  goHome(){
    // e.preventDefault;
    browserHistory.push('/');
    window.location.reload();
  }
  handleCreate(){
    browserHistory.push('/#/create');
    window.location.reload();
  }
  render(){
    const styles = {
      logo:{
        width: 88,
        cursor:"pointer"
      }
    }
    const Logged = (props) => (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon color={"white"}/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" onClick={this.gotoHome}/>
        <MenuItem primaryText="Log out" onClick={this.logOut.bind(this)}/>
      </IconMenu>
    );
    return(
      <MuiThemeProvider>
      <AppBar
        zDepth={1}
        style={{"backgroundColor":"#00a6b4"}}
        title={<div><FlatButton disabled={true} label="EXPORT"/><FlatButton label="CREATE" style={{"color":"white"}} onClick={this.handleCreate}/></div>}
        iconElementLeft={<Link to={'/'}><img src={require('../img/BPDAInitialismLogo_RGB_BlueAndWhite.png')} alt="boohoo" style={styles.logo}/></Link>}

        iconElementRight={
          this.state.loggedIn ?
          <div><span className="loginUsername">{this.state.loginText}</span><Logged/></div>:
          <GoogleLogin
              clientId={auth.google.clientid}
              buttonText={<span className="loginText">LOGIN</span>}
              redirectUri={auth.google.callbackurl}
              onSuccess={this.responseGoogle.bind(this)}
              className="loginBtn"
              />

        }
      >
      </AppBar>
    </MuiThemeProvider>
    )
  }
}
