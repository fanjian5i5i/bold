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
    WwebkitBoxFlex: 1,
    flex: "1 1 auto",
    order: 2,
    outline: "none",
    border: "none",
    padding: 13,
    borderRadius: 2,
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
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Lease Admin" />
        <MenuItem primaryText="Dashboard" />
        <MenuItem primaryText="Analytics" />
        <MenuItem primaryText="Reports" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    }
  >
    
  </AppBar>
);

export default AppBarSearch;