import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import { Router, browserHistory } from 'react-router';
export default class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle () {
    console.log(this.state);
    this.setState({open: !this.state.open});
  }
  handleClose () {
    this.setState({open: false});
  }

  handleCreate(){
    browserHistory.push('/#/create');
    window.location.reload();
  }

  render() {
    return (
      <div>
        <IconButton
          label="Open Drawer"
          onTouchTap={this.handleToggle.bind(this)}>
          <NavigationMenu color={"white"}/>
        </IconButton>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleCreate} style={{color:"#f25520"}}>Create Project</MenuItem>
        </Drawer>
      </div>
    );
  }
}
