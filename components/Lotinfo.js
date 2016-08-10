import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import Subheader from 'material-ui/Subheader';
const styles = {
  display: 'inline-block',
  // float: 'right',
  margin: '16px 0px 16px 0px ',
};

const dropStyles = {
  customWidth: {
    width: 150,
  },
};
const hoverStyle = {
  cursor:"pointer",
  color:"rgba(0, 0, 0, 0.298039) !important"
};
const headerStyle={
  background:"#f25520",
  color:"white"
};
export default class Detail2 extends React.Component {
   constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange (event, index, value){
    this.setState({value});
  }

  render() {
    return (
      <Paper style={styles}>
        <Subheader style={headerStyle}>Lot Information</Subheader>
        <Menu desktop={true} className="parcel-detial">
            <MenuItem primaryText="Historical Issues" secondaryText="Landmark Area" />
            <MenuItem primaryText="Environmental Issues" secondaryText="Marine Life" />
            <MenuItem primaryText="Responsible BRA Division" secondaryText="Asset Management" />
            <MenuItem primaryText="Staff" secondaryText={<a href="#">Fran Collins</a>} />
            <MenuItem primaryText="Lot Size" secondaryText="158,461 sq ft" />
            <MenuItem primaryText="Land Value" secondaryText="$1,584,600.00" />
            <MenuItem primaryText="Total Value" secondaryText="$1,584,600.00" />
            <MenuItem primaryText="Assessment Year" secondaryText="2002" />
            <MenuItem primaryText="Status" secondaryText="Tentatively Designated" />
            <MenuItem primaryText="Preferred Use" disabled={true} style={hoverStyle} secondaryText={
              <SelectField style={styles.customWidth} value={this.state.value} onChange={this.handleChange.bind(this)}>
                <MenuItem value={1} primaryText="Mixed Use" />
                <MenuItem value={2} primaryText="Residential" />
                <MenuItem value={3} primaryText="Commerical" />
              </SelectField>
            }/>

          </Menu>
      </Paper>
    )
  }
};


export default Detail2;