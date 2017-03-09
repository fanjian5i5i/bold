import React from 'react';
import $ from "jquery";
import {List, ListItem} from 'material-ui/List';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import HomeIcon from 'material-ui/svg-icons/action/home';
import BOLDIcon from 'material-ui/svg-icons/action/assignment-ind';
import Avatar from 'material-ui/Avatar';
import Snackbar from 'material-ui/Snackbar';
import {blue500, yellow600,red600} from 'material-ui/styles/colors';
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var config = require('../server/config.json');
const styles = {
  display: 'inline-block',
  float: 'left',
  margin: '16px 32px 16px 0',
  overFlow:"auto"
};
const headerStyle={
  background:"#00a6b4",
  color:"white"
};
const menuStyle = {
  height:"100%",
  width:"100%"
}




var ParcelDetail = React.createClass({

  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     "parcel":"",
  //     "open":false,
  //     "title":"",
  //     "content":""
  //   };
  //   // mixins: [LinkedStateMixin];
  // };
  mixins: [LinkedStateMixin],
  getInitialState:function(){
    return {
      "parcel":{
  "acf": {
    "neighborhood": {
      "term_id": 82,
      "name": "South Boston",
      "slug": "southboston",
      "term_group": 0,
      "term_taxonomy_id": 82,
      "taxonomy": "neighborhoods",
      "description": "",
      "parent": 0,
      "count": 20,
      "filter": "raw"
    },
    "owner": {
      "term_id": 10,
      "name": "Boston Redevelopment Authority",
      "slug": "bra",
      "term_group": 0,
      "term_taxonomy_id": 10,
      "taxonomy": "owners",
      "description": "",
      "parent": 0,
      "count": 3,
      "filter": "raw"
    },
    "pid": "123123123",
    "st_name": "HAUL RD",
    "st_num": "SES",
    "zipcode": "02127",
    "site": "South Boston Convention Center",
    "assessing_property_type": "985",
    "lot_size": "129872",
    "land_value": "303277",
    "building_value": "0",
    "currentuse": [],
    "preferreduse": "",
    "notes": "",
    "ur_area": "",
    "ur_number": "",
    "conveyance_date": "Sun Feb 19 2017 00:00:00 GMT-0500 (EST)",
    "conveyed_to": "",
    "last_observed_date": "",
    "responsible_dept": {
      "term_id": {
        "term_id": 25,
        "name": "Community Housing and Development",
        "slug": "community-housing-and-development",
        "term_group": 0,
        "term_taxonomy_id": 25,
        "taxonomy": "responsible_dept",
        "description": "",
        "parent": 0,
        "count": 15,
        "filter": "raw"
      }
    },
    "responsible_pm": null,
    "lease_lessee": "",
    "lease_term": "",
    "lease_use": "",
    "designatedto": "",
    "titlerundown": false,
    "taxliens": false,
    "historical": "",
    "environmental": "",
    "gis_lat": "42.344261",
    "gis_lon": "-71.050053",
    "projectstatus": {
      "term_id": 5,
      "name": "Available",
      "slug": "available",
      "term_group": 0,
      "term_taxonomy_id": 5,
      "taxonomy": "projectstatus",
      "description": "",
      "parent": 0,
      "count": 3,
      "filter": "raw"
    },
    "gis_geometry": "POLYGON ((-7909172.4222529158 5212714.1288116053, -7909221.4489525855 5212757.229432784, -7909246.2550837491 5212728.0678480715, -7909270.9543849882 5212698.9885138869, -7909287.4070898816 5212679.5918997377, -7909316.2891169284 5212645.50932686, -7909327.9297785852 5212636.8590278625, -7909352.6665886417 5212622.4159098864, -7909369.4704733267 5212610.9398844019, -7909389.0225712508 5212596.6212010458, -7909404.6345864888 5212584.2427542806, -7909404.634337239 5212584.2425413653, -7909396.6116582751 5212577.2191663235, -7909359.513887139 5212607.4706387818, -7909347.8857556321 5212616.5463636294, -7909335.8798607122 5212625.1161192358, -7909323.51820267 5212633.1642018929, -7909310.8234337084 5212640.6758638248, -7909297.8188164476 5212647.63734024, -7909284.5281812958 5212654.0358745381, -7909234.8819635678 5212676.6381058022, -7909226.4319234211 5212680.7267265245, -7909218.1825418323 5212685.2064253241, -7909210.1519058589 5212690.0673803389, -7909172.4222529158 5212714.1288116053))"
  }
},
      // "open":false,
      "title":"",
      "content":"",
      "config":"",
      "snackbarOpen":false,
      "message":""
    }
  },
  componentDidMount(){
    console.log(this.props.parcel);
    this.setState({"parcel":this.props.parcel,"config":config});

  },

  render(){


    var that = this;

    const styles = {
      underlineStyle: {
        borderColor: "#00a6b4",
      },
      titleStyle:{
        color:"#00a6b4",
        // backgroundColor:"#f25520"
      },
      sumbitBtnStyle:{
        color:"#00a6b4",
      }
    };

    return (
      <div>
      <Paper style={styles}>
        <Subheader style={headerStyle}>Parcel Information</Subheader>
          <List style={menuStyle} className="parcel-detial">
            <ListItem
                key="0"
                primaryText={config.groups.group1}
                initiallyOpen={true}
                leftAvatar={<Avatar icon={<HomeIcon />} backgroundColor={blue500} />}
                primaryTogglesNestedList={true}
                nestedItems={[
                  Object.keys(config.fieldNames.group1).map(function(k){
                    // console.log(k);
                    var rightText = "";
                    var lineHeightStyle = {};
                    switch(k) {
                        case "neighborhood":
                          if(!that.state.parcel.acf.neighborhood){
                            that.state.parcel.acf.neighborhood = {name:""}
                          }
                          rightText = that.state.parcel.acf[k].name;
                            break;
                        case "owner":
                            if(!that.state.parcel.acf.owner){
                              that.state.parcel.acf.owner = {name:""}
                            }
                            rightText = that.state.parcel.acf[k].name;
                            break;
                        case "notes":
                            rightText = that.state.parcel.acf[k];
                            lineHeightStyle = {height:100};
                            break;
                        // case "zipcode":
                        //     rightText = that.state.parcel.acf[k].name;
                        //     break;
                        default:
                            rightText = that.state.parcel.acf[k] ? that.state.parcel.acf[k] : "";
                    }
                    return <ListItem key={k} primaryText={config.fieldNames.group1[k]} rightAvatar={<div style={{"top":"0px !important"}}>{rightText}</div>} style={lineHeightStyle}/>
                  })
                ]}
             />
             <ListItem
                 key="1"
                 primaryText={config.groups.group2}
                 leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={red600} />}
                 primaryTogglesNestedList={true}
                 initiallyOpen={false}
                 nestedItems={[
                   Object.keys(config.fieldNames.group2).map(function(k){
                     var rightText = "";
                     var lineHeight = {};
                     switch(k) {
                         case "ur_area":
                             rightText = that.state.parcel.acf[k].name;
                             break;
                         case "currentuse":
                             rightText = that.state.parcel.acf[k].name;
                             break;
                         case "preferreduse":
                             rightText = that.state.parcel.acf[k].name;
                             break;
                         default:
                             rightText = that.state.parcel.acf[k];
                     }
                     return <ListItem key={k} primaryText={config.fieldNames.group2[k]} rightAvatar={<div style={{"top":"0px !important","width":lineHeight}}>{rightText}</div>} style={{"height":lineHeight}}/>
                   })
                 ]}
              />
              <ListItem
                  key="2"
                  primaryText={config.groups.group3}
                  leftAvatar={<Avatar icon={<BOLDIcon />} backgroundColor={yellow600} />}
                  primaryTogglesNestedList={true}
                  initiallyOpen={false}
                  nestedItems={[
                    Object.keys(config.fieldNames.group3).map(function(k){
                      // console.log(that.state.parcel.acf);
                      var rightText = "";
                      var lineHeight = {};
                      switch(k) {
                          case "projectstatus":
                              rightText = that.state.parcel.acf[k].name;
                              break;
                          case "responsible_dept":
                              rightText = that.state.parcel.acf[k].name ? that.state.parcel.acf[k].name : "";
                              break;
                          case "responsible_pm":
                              rightText =  that.state.parcel.acf[k].name ? that.state.parcel.acf[k].name : "";
                              break;

                          case "notes":
                              rightText = that.state.parcel.acf[k];
                              lineHeight = 200;
                              break;
                          default:
                              rightText = that.state.parcel.acf[k];
                      }
                      return <ListItem key={k} primaryText={config.fieldNames.group3[k]} rightAvatar={<div style={{"top":"0px !important","width":lineHeight}}>{rightText}</div>} style={{"height":lineHeight}}/>
                    })
                  ]}
               />


          </List>

      </Paper>
      </div>
    )
  }
});
export default ParcelDetail;
