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
import Toggle from 'material-ui/Toggle';
import Avatar from 'material-ui/Avatar';
import Snackbar from 'material-ui/Snackbar';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';
import {blue500, yellow600,red600} from 'material-ui/styles/colors';
import update from 'immutability-helper';
import linkState from 'react-link-state';

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




var ParcelDetailEdit = React.createClass({

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
      "parcel":"",
      "open":false,
      "title":"",
      "content":"",
      "config":"",
      "snackbarOpen":false,
      "message":"",
      "neighborhoods":[],
      "zipcodes":[],
      "projectstatuses":[],
      "owners":[],
      "urareas":[],
      "projectManagers":[],
      "currentuses":[],
      "preferreduses":[],
      "responsibleDepts":[]

    }
  },
  handleSubmit(e){
    var tempParcel = this.state.parcel;
    tempParcel.acf[this.state.title] = this.state.content;
    console.log(this.state.title);
    this.setState({parcel:tempParcel,open: false});
  },
  handleAttrChange(title, e){
    this.setState({content: e.target.value});

  },
  handleNeighborhoodChange(e,value){
    console.log(this.state.neighborhoods);
    const tempState = update(this.state, {
      parcel:{acf: {neighborhood:{$set: this.state.neighborhoods[value]}}}

    });

    this.setState(tempState);
  },
  handleURAreaChange(e,value){
    const tempState = update(this.state, {
      parcel:{acf: {ur_area:{$set: this.state.urareas[value]}}}

    });

    this.setState(tempState);
  },
  handleCurrentUseChange(e,value){
    const tempState = update(this.state, {
      parcel:{acf: {currentuse:{$set: this.state.currentuses[value]}}}

    });

    this.setState(tempState);
  },
  handlePreferedUseChange(e,value){
    const tempState = update(this.state, {
      parcel:{acf: {preferreduse:{$set: this.state.preferreduses[value]}}}

    });
    this.setState(tempState);
  },

  handleOwnerChange(e,value){
    const tempState = update(this.state, {
      parcel:{acf: {owner:{$set: this.state.owners[value]}}}

    });

    this.setState(tempState);
  },

  handleStatusChange(e,value){
    const tempState = update(this.state, {
      parcel:{acf: {projectstatus456:{$set: this.state.projectstatuses[value]}}}

    });

    this.setState(tempState);
  },
  handleResponsibleDeptChange(e,value){
    console.log(this.state.responsibleDepts);
    const tempState = update(this.state, {
      parcel:{acf: {responsible_dept:{$set: this.state.responsibleDepts[value]}}}

    });

    this.setState(tempState);
  },
  handleProjectManagerChange(e,value){
    console.log(this.state.responsibleDepts);
    const tempState = update(this.state, {
      parcel:{acf: {responsible_pm:{$set: this.state.projectManagers[value]}}}

    });

    this.setState(tempState);
  },
  handleConveyanceDateChange(e,value){
    console.log(value.toString());
    const tempState = update(this.state, {
      parcel:{acf: {conveyance_date:{$set: value}}}

    });
    this.setState(tempState);
  },

  handleTitleRunDownChange(e,value){
    console.log(value.toString());
    const tempState = update(this.state, {
      parcel:{acf: {titlerundown:{$set: value}}}

    });
    this.setState(tempState);
  },
  handleTaxliensChange(e, value){
    console.log(value.toString());
    const tempState = update(this.state, {
      parcel:{acf: {taxliens:{$set: value}}}

    });
    this.setState(tempState);
  },
  componentWillMount(){
    // console.log(that.props.parcel);
    var that = this;
    this.setState({"parcel":this.props.parcel,"config":config});
    $.ajax({
          type: 'GET',
          url: 'http://localhost:3000/api/neighborhoods',
          dataType: "json"
          // data:that.state.parcel
        }).done(function(res){
          // console.log(res);
          res.forEach(function(neighborhood){
            neighborhood["term_id"] = neighborhood["id"];
            delete neighborhood["id"];
          });
          that.setState({neighborhoods:res});
      });
        $.ajax({
              type: 'GET',
              url: 'http://localhost:3000/api/owners',
              dataType: "json"
              // data:that.state.parcel
            }).done(function(res){
              console.log(res);
              res.forEach(function(owner){
                owner["term_id"] = owner["id"];
                delete owner["id"];
              });
              that.setState({owners:res});
          });
        $.ajax({
              type: 'GET',
              url: 'http://localhost:3000/api/preferreduses',
              dataType: "json"
              // data:that.state.parcel
            }).done(function(res){
              console.log(res);
              res.forEach(function(result){
                result["term_id"] = result["id"];
                delete result["id"];
              });
              that.setState({preferreduses:res});
          });
          $.ajax({
                type: 'GET',
                url: 'http://localhost:3000/api/currentuses',
                dataType: "json"
                // data:that.state.parcel
              }).done(function(res){
                console.log(res);
                res.forEach(function(result){
                  result["term_id"] = result["id"];
                  delete result["id"];
                });
                that.setState({currentuses:res});
            });
            $.ajax({
                  type: 'GET',
                  url: 'http://localhost:3000/api/urareas',
                  dataType: "json"
                  // data:that.state.parcel
                }).done(function(res){
                  // console.log(res);
                  res.forEach(function(result){
                    result["term_id"] = result["id"];
                    delete result["id"];
                  });
                  that.setState({urareas:res});
              });
          $.ajax({
                type: 'GET',
                url: 'http://localhost:3000/api/statuses',
                dataType: "json"
                // data:that.state.parcel
              }).done(function(res){
                console.log(res);
                res.forEach(function(result){
                  result["term_id"] = result["id"];
                  delete result["id"];
                });
                that.setState({projectstatuses:res});
            });
            $.ajax({
                  type: 'GET',
                  url: 'http://localhost:3000/api/responsibledepts',
                  dataType: "json"
                  // data:that.state.parcel
                }).done(function(res){
                  console.log(res);
                  res.forEach(function(result){
                    result["term_id"] = result["id"];
                    delete result["id"];
                  });
                  that.setState({responsibleDepts:res});
              });
          $.ajax({
                type: 'GET',
                url: 'http://localhost:3000/api/projectmanagers',
                dataType: "json"
                // data:that.state.parcel
              }).done(function(res){
                console.log(res);
                res.forEach(function(result){
                  result["term_id"] = result["id"];
                  delete result["id"];
                });
                that.setState({projectManagers:res});
            });



  },
  handleCancel(e){
    // this.setState(edit:false);
    //  window.location.reload();
    this.props.handler();

  },
  handleTextChange(e,text){
    console.log(e.target.id);

  },
  handleSubmitAll(){
    var that = this;
    console.log(that.refs);
    var tempAcf =
          {
            pid:that.refs.pid.getValue(),
            st_num:that.refs.st_num.getValue(),
            st_num:that.refs.st_num.getValue(),
            assessing_property_type:that.refs.assessing_property_type.getValue(),
            assessing_property_type:that.refs.assessing_property_type.getValue(),
            building_value:that.refs.building_value.getValue(),
            st_num:that.refs.st_num.getValue(),
            conveyed_to:that.refs.conveyed_to.getValue(),
            designatedto:that.refs.designatedto.getValue(),
            environmental:that.refs.environmental.getValue(),
            historical: that.refs.historical.getValue(),

            land_value:that.refs.land_value.getValue(),

            lease_lessee:that.refs.lease_lessee.getValue(),

          lease_term:that.refs.lease_term.getValue(),

            lease_use:that.refs.lease_use.getValue(),

            lot_size: that.refs.lot_size.getValue(),

            notes:that.refs.notes.getValue(),
            site:that.refs.site.getValue(),
            st_name:that.refs.st_name.getValue(),
            ur_number:that.refs.ur_number.getValue(),
            zipcode:that.refs.zipcode.getValue()

    };
    var tempState = Object.assign(that.state, {
        parcel: Object.assign(this.state.parcel, {

            acf:Object.assign(this.state.parcel.acf,tempAcf)

        }),

    });

    this.setState(tempState,function(e){
      console.log(that.state.parcel.acf);
    });

    $.ajax({
          type: 'GET',
          url: 'http://localhost:3000/api/updatetest',
          dataType: "json",
          data:that.state.parcel
        }).done(function(res){

          // that.setState({"project":JSON.parse(res)});
          console.log(res);
          // that.setState({snackbarOpen:true,message:res.message});
          // that.props.handler();
      });

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
      },
      inputs:{
        paddingLeft:10,
        paddingRight:10
      },
      toggles:{
        paddingTop:20,
        paddingBottom:20,
        padding:10,

      }
    };

    return (
      <div>
      <Paper style={styles}>
        <Subheader style={headerStyle}>Parcel Information Editting</Subheader>
          <List style={menuStyle}>
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
                        var element;
                        var fieldName = config.fieldNames.group1[k];
                        switch(k) {
                            case "neighborhood":
                                rightText = that.state.parcel.acf[k].name;
                                element = [<div style={styles.inputs}><SelectField
                                  floatingLabelText="Neighborhood"
                                  fullWidth="true"
                                  value={that.state.parcel.acf[k].term_id}
                                  onChange={that.handleNeighborhoodChange}
                                >
                                  {
                                    that.state.neighborhoods.map((neighborhood)=>{
                                    return <MenuItem key={neighborhood.id} value={neighborhood.term_id} primaryText={neighborhood.name} />
                                  })}
                                </SelectField></div>]
                                break;
                            case "owner":
                                rightText = that.state.parcel.acf[k].name;
                                element = [<div style={styles.inputs}><SelectField
                                  floatingLabelText="Owner"
                                  fullWidth="true"
                                  value={that.state.parcel.acf[k].term_id}
                                  onChange={that.handleOwnerChange}
                                >
                                  {that.state.owners.map((owner)=>{
                                    return <MenuItem key={owner.id} value={owner.term_id} primaryText={owner.name} />
                                  })}
                                </SelectField></div>]
                                break;
                            case "notes":
                                rightText = that.state.parcel.acf[k];
                                lineHeightStyle = {height:100};
                                break;
                            default:
                                rightText = that.state.parcel.acf[k];
                        }
                        if(element === undefined){
                          element = [<div style={styles.inputs}><TextField key={k} floatingLabelText={config.fieldNames.group1[k]}  defaultValue={rightText}  fullWidth={true}  ref={k}/></div>];
                        }

                        return element
                      })
                    ]}
                 />
                 <ListItem
                     key="1"
                     primaryText={config.groups.group2}
                     leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={red600} />}
                     primaryTogglesNestedList={true}
                     initiallyOpen={true}
                     nestedItems={[
                       Object.keys(config.fieldNames.group2).map(function(k){
                         var rightText = "";
                         var lineHeightStyle = {};
                         var element;
                         switch(k) {
                             case "preferreduse":
                                 rightText = that.state.parcel.acf[k].name;
                                 element = [<div style={styles.inputs}><SelectField
                                   floatingLabelText="Preferred Use"
                                   fullWidth="true"
                                   value={that.state.parcel.acf[k].term_id}
                                   onChange={that.handlePreferedUseChange}
                                 >
                                   {that.state.preferreduses.map((result)=>{
                                     return <MenuItem key={result.id} value={result.term_id} primaryText={result.name} />
                                   })}
                                 </SelectField></div>]
                                 break;
                             case "currentuse":
                                 rightText = that.state.parcel.acf[k].name;
                                 element = [<div style={styles.inputs}><SelectField
                                   floatingLabelText="Current Use"
                                   fullWidth="true"
                                   value={that.state.parcel.acf[k].term_id}
                                   onChange={that.handleCurrentUseChange}
                                 >
                                   {that.state.currentuses.map((result)=>{
                                     return <MenuItem key={result.id} value={result.term_id} primaryText={result.name} />
                                   })}
                                 </SelectField></div>]
                                 break;
                             case "ur_area":
                                 rightText = that.state.parcel.acf[k].name;
                                 element = [<div style={styles.inputs}><SelectField
                                   floatingLabelText= {config.fieldNames.group2[k]}
                                   fullWidth="true"
                                   value={that.state.parcel.acf[k].term_id}
                                   onChange={that.handleURAreaChange}
                                 >
                                   {that.state.urareas.map((result)=>{
                                     return <MenuItem key={result.id} value={result.term_id} primaryText={result.name} />
                                   })}
                                 </SelectField></div>]
                                 break;
                             case "notes":
                                 rightText = that.state.parcel.acf[k];
                                 lineHeightStyle = {height:100};
                                 break;
                             default:
                                 rightText = that.state.parcel.acf[k];
                         }
                         if(element === undefined){
                           element = [<div style={styles.inputs}><TextField key={k} floatingLabelText={config.fieldNames.group2[k]}  defaultValue={rightText} fullWidth={true} ref={k}/></div>];
                         }

                         return element
                       })
                     ]}
                  />
                  <ListItem
                      key="2"
                      primaryText={config.groups.group3}
                      leftAvatar={<Avatar icon={<BOLDIcon />} backgroundColor={yellow600} />}
                      primaryTogglesNestedList={true}
                      initiallyOpen={true}
                      nestedItems={[
                        Object.keys(config.fieldNames.group3).map(function(k){
                          var rightText = "";
                          var lineHeightStyle = {};
                          var element;
                          var multiLine = false;
                          var rows = 1;
                          switch(k) {
                              case "projectstatus":
                                  rightText = that.state.parcel.acf[k].name;

                                  element = [<div style={styles.inputs}><SelectField
                                    floatingLabelText= {config.fieldNames.group3[k]}
                                    fullWidth="true"
                                    value={that.state.parcel.acf[k].term_id}
                                    onChange={that.handleStatusChange}
                                  >
                                    {that.state.projectstatuses.map((result)=>{
                                      return <MenuItem key={result.id} value={result.term_id} primaryText={result.name} />
                                    })}
                                  </SelectField></div>]
                                  break;
                              case "notes":
                                  rightText = that.state.parcel.acf[k];
                                  lineHeightStyle = {height:100};
                                  multiLine = true;
                                  rows = 2;
                                  break;
                              case "responsible_dept":
                                  rightText = that.state.parcel.acf[k].name;
                                  element = [<div style={styles.inputs}><SelectField
                                    floatingLabelText= {config.fieldNames.group3[k]}
                                    fullWidth="true"
                                    value={that.state.parcel.acf[k].term_id}
                                    onChange={that.handleResponsibleDeptChange}
                                  >
                                    {that.state.responsibleDepts.map((result)=>{
                                      return <MenuItem key={result.id} value={result.term_id} primaryText={result.name} />
                                    })}
                                  </SelectField></div>]
                                  break;
                              case "responsible_pm":
                                rightText = that.state.parcel.acf[k].name;
                                element = [<div style={styles.inputs}><SelectField
                                  floatingLabelText= {config.fieldNames.group3[k]}
                                  fullWidth="true"
                                  value={that.state.parcel.acf[k].term_id}
                                  onChange={that.handleProjectManagerChange}
                                >
                                  {that.state.projectManagers.map((result)=>{
                                    return <MenuItem key={result.id} value={result.term_id} primaryText={result.name} fullWidth="true"/>
                                  })}
                                </SelectField></div>]
                                break;
                              case "conveyance_date":
                                element =  [<div style={styles.inputs}>
                                  <DatePicker
                                  floatingLabelText= {config.fieldNames.group3[k]}
                                  fullWidth="true"
                                  value={that.state.parcel.acf[k].name}
                                  onChange={that.handleConveyanceDateChange}/>
                                  </div>]
                                break;
                              case "last_observed_date":
                                element =  [<div style={styles.inputs}><DatePicker floatingLabelText= {config.fieldNames.group3[k]} fullWidth="true" value={that.state.parcel.acf[k].name}/></div>]

                                break;
                              case "titlerundown":
                                element =[
                                  <div style={styles.toggles}>
                                  <Toggle
                                    label={config.fieldNames.group3[k]}
                                    style={styles.toggle}
                                    toggled = {that.state.parcel.acf.titlerundown}
                                    onToggle= {that.handleTitleRunDownChange}

                                  />
                                  </div>
                                ]
                                break;
                            case "taxliens":
                              element =[
                                <div style={styles.toggles}>
                                <Toggle
                                  label={config.fieldNames.group3[k]}
                                  style={styles.toggle}
                                  toggled = {that.state.parcel.acf.taxliens}
                                  onToggle= {that.handleTaxliensChange}

                                />
                                </div>
                              ]
                              break;
                              default:
                                  rightText = that.state.parcel.acf[k];
                          }

                          if(element === undefined){
                            element = [<div style={styles.inputs}><TextField key={k} floatingLabelText={config.fieldNames.group3[k]}  defaultValue={rightText}  fullWidth={true} ref={k} multiLine = {multiLine}
                            rows = {rows}/></div>];
                          }

                          return element
                        })
                      ]}
                   />
            </List>

      </Paper>

      <RaisedButton label="Submit" backgroundColor="#f25520" primary={true}  style={{"float":"right", marginTop:10}} onClick={that.handleSubmitAll}/>
      <RaisedButton label="Cancel" style={{"float":"right", marginTop:10, marginLeft:100}} onClick={that.handleCancel}/>
      <Snackbar
          open={this.state.snackbarOpen}
          message={this.state.message}
          autoHideDuration={2000}
        />
      </div>
    )
  }
});
export default ParcelDetailEdit;
