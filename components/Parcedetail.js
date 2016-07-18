import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
const styles = {
  display: 'inline-block',
  float: 'left',
  margin: '16px 32px 16px 0',
  overFlow:"auto"
};
const headerStyle={
  background:"#f25520",
  color:"white"
};
const menuStyle = {
  height:368
}

const ParceDetail = () => (
  <Paper style={styles}>
  <Subheader style={headerStyle}>Parcel Information</Subheader>
    <Menu desktop={true} style={menuStyle} className="parcel-detial">
        <MenuItem primaryText="Parcel ID" secondaryText="0203505600" />
        <MenuItem primaryText="Address" secondaryText="EIGHTH ST" />
        <MenuItem primaryText="Zip Code" secondaryText="02129" />
        <MenuItem primaryText="Site Name" secondaryText="0203505600 EIGHTH ST" />
        <MenuItem primaryText="Owner" secondaryText="Boston Redevelopment Authority" />
        <MenuItem primaryText="UR Area" secondaryText="Charlestown" />
        <MenuItem primaryText="UR #" secondaryText="55" />
      </Menu>
  </Paper>
);

export default ParceDetail;