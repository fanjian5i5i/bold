import { default as React, Component } from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import { browserHistory } from 'react-router';
import update from 'immutability-helper';
import $ from "jquery";

export default class ProjectCreateForm extends Component {
  /*
   * 1. Create a component that wraps all your map sub-components.
   */
   constructor(props) {
     super(props);

     this.state = {
       pid:"",
       st_num:"",
       st_name:"",
       zipcode:"",
       owner:"",
       assessing_property_type:"",
       lot_size:"",
       land_value:"",
       building_value:"",
       acf:{
         owner: [],
          pid: "",
          st_name: "",
          st_num: "",
          zipcode: "",
          site: "",
          neighborhood: [],
          assessing_property_type: "",
          lot_size: "",
          land_value: "",
          building_value: "",
          currentuse: [],
          preferreduse: [],
          notes: "",
          ur_area: "",
          ur_number: "",
          zoning: "",
          conveyance_date: "",
          conveyed_to: "",
          last_observed_date: "",
          responsible_dept: [],
          responsible_pm: [],
          lease_lessee: "",
          lease_term: "",
          lease_use: "",
          designatedto: "",
          titlerundown: false,
          taxliens: false,
          historical: "",
          environmental: "",
          gis_lat: "",
          gis_lon: "",
          gis_geometry: "",
          projectstatus: []
          }
      //  neighborhoods:"",
      //  neighborhood:"",
      //  currentuses:"",
      //  currentuse:144,
      //  preferreduses:"",
      //  preferreduse:100
     };
   }
   componentDidMount(){
     var that = this;

     $.ajax({
          type: 'GET',
          url: 'http://localhost:3000/api/owners',
        }).done(function(res){
          that.setState({"owners":res});
      });
      $.ajax({
           type: 'GET',
           url: 'http://localhost:3000/api/neighborhoods',
         }).done(function(res){
           that.setState({"neighborhoods":res});
       });
      $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/api/currentuses',
          }).done(function(res){
            that.setState({"currentuses":res});
        });
        $.ajax({
              type: 'GET',
              url: 'http://localhost:3000/api/preferreduses',
            }).done(function(res){
              that.setState({"preferreduses":res});
          });
      // if(this.props.parcel){
      //   that.setState({
      //     pid:this.props.pid,
      //     st_num:this.props.parcel.st_num,
      //     st_name:this.props.parcel.st_name + " " + this.props.parcel.st_name_suf,
      //     zipcode:this.props.parcel.zipcode,
      //     neighborhood:"",
      //     owner:this.props.parcel.owner,
      //     assessing_property_type:this.props.parcel.ptype,
      //     lot_size:this.props.parcel.land_sf,
      //     land_value:this.props.parcel.av_land,
      //     building_value:this.props.parcel.av_bldg
      //   })
      // }

   }
  //  neighborhoodChange(e, index, value){
  //    this.setState({neighborhood:value})
  //  }
   currentuseChange(e, index, value){
     this.setState({currentuse:value})
   }
   preferreduseChange(e, index, value){
     this.setState({preferreduse:value})
   }
   handleCancel(e){
     e.preventDefault;
     browserHistory.push('/');
     window.location.reload();
   }
   handleSubmit(e){
     e.preventDefault;
     var that = this;

     var updatedAcf = Object.assign({}, this.state.acf, {
       gis_lat:that.props.latlng.lat,
       gis_lon:that.props.latlng.lng,
       pid:that.props.parcel.pid,
       st_num:that.props.parcel.st_num,
       st_name:that.props.parcel.st_name + " " + that.props.parcel.st_name_suf,
       zipcode:that.props.parcel.zipcode,
       assessing_property_type:that.props.parcel.ptype,
       lot_size:that.props.parcel.land_sf,
       land_value:that.props.parcel.av_land,
       building_value:that.props.parcel.av_bldg

     });
     this.setState({acf:updatedAcf},()=> {

       var data = this.state;
       console.log(data);
       $.ajax({
             type: 'GET',
             url: 'http://localhost:3000/api/create',
             dataType: "json",
             data:data
           }).done(function(res){

             // that.setState({"project":JSON.parse(res)});
             console.log(res);
            //  e.preventDefault;
             browserHistory.push('/#project/'+res.id);
             window.location.reload();
            //  that.setState({snackbarOpen:true,message:res.message})
         });
     });
    //  this.setState({
    //    acf:update(that.state.acf,
    //      {gis_lat:{$set:that.props.latlng.lat.toString()}},
    //      {gis_lon:{$set:that.props.latlng.lng.toString()}}
    //    )
    //  });

    //  this.setState({
    //    acf:update(that.state.acf,
    //      {gis_lon:{$set:that.props.latlng.lng.toString()}}
    //    )
    //  });

            //


   }
  render() {
    var that = this;
    //  Took away cuz the project editing page would have the rest
    //  {<SelectField fullWidth={true} value={this.state.currentuse} onChange={this.currentuseChange.bind(this)}>
    //<TextField
    //   floatingLabelText="Site"
    //  //  defaultValue={this.state.parcel.pid}
    //   fullWidth={true}
    // /><br />
    //   {this.state.currentuses.map((currentuse) => (
    //     <MenuItem value={currentuse.id} primaryText={currentuse.name} />
    //   ))}
    //   </SelectField>
    //  <br /><br />
    //  <SelectField fullWidth={true} value={this.state.preferreduse} onChange={this.preferreduseChange.bind(this)}>
    //   {this.state.preferreduses.map((preferreduse) => (
    //     <MenuItem value={preferreduse.id} primaryText={preferreduse.name} />
    //   ))}
    //   </SelectField>
    //  <br /><br />
    //  <TextField
    //    floatingLabelText="Notes"
    //    fullWidth={true}
    //  /><br />
    //  <TextField
    //    floatingLabelText="Urban Renewal Area"
    //    fullWidth={true}
    //  /><br />
    //  <TextField
    //    floatingLabelText="Urban Renewal Area Number"
    //    fullWidth={true}
    //  /><br /><br />
  //   <SelectField floatingLabelText="Neighborhood" fullWidth={true} value={this.state.neighborhood} onChange={this.neighborhoodChange.bind(this)}>
  //    {this.state.neighborhoods.map((neighborhood) => (
  //      <MenuItem key={neighborhood.id} value={neighborhood.id} primaryText={neighborhood.name} />
  //    ))}
  //  </SelectField>
  //  <br />
    //  <DatePicker hintText="Convenyance Date" fullWidth={true}/>
    //  <TextField
    //    floatingLabelText="Conveyed To"
    //    fullWidth={true}
    //  /><br /><br />
    //  <DatePicker hintText="Last Observed Date" fullWidth={true}/>}
     const style={
       btnStyle:{
         maring:5,
         float:"right"
       },
       headerStyle:{
         background:"#00a6b4",
         color:"white",
         "border-radius": "2px 2px 0 0",
       },
       paper:{
            "border-radius": "2px 2px 0 0",
            // backgroundColor:"#e6e6e6"
       }
     }
     const Form = () =>(
       <Paper style={style.paper}>
       <Subheader style={style.headerStyle}>Project Information</Subheader>
        <div style={{padding:30}}>
         <TextField
           floatingLabelText="PID"
           defaultValue={this.props.pid}
           fullWidth={true}
         /><br />

         <TextField
           floatingLabelText="Street Number"
           defaultValue={this.props.parcel.st_num}
           fullWidth={true}
         /><br />
         <TextField
           floatingLabelText="Street Name"
           defaultValue={this.props.parcel.st_name + " " + this.props.parcel.st_name_suf}
           fullWidth={true}
         /><br />
         <TextField
           floatingLabelText="Zipcode"
           defaultValue={this.props.parcel.zipcode}
           fullWidth={true}
         /><br />

        <TextField
          floatingLabelText="Owner"
          defaultValue={this.props.parcel.owner}
          fullWidth={true}
        /><br />
        <TextField
          floatingLabelText="Assessing Property Type"
          defaultValue={this.props.parcel.ptype}
          fullWidth={true}
        /><br />
        <TextField
          floatingLabelText="Lot Size"
          defaultValue={this.props.parcel.land_sf}
          fullWidth={true}
        /><br />
        <TextField
          floatingLabelText="Land Value"
          defaultValue={this.props.parcel.av_land}
          fullWidth={true}
        /><br />
        <TextField
          floatingLabelText="Building Value"
          defaultValue={this.props.parcel.av_bldg}
          fullWidth={true}
        /><br />

         </div>
         <RaisedButton label="Submit" primary={true}  style={{"float":"right", marginTop:10}} onClick={that.handleSubmit.bind(this)}/>
         <RaisedButton label="Cancel" style={{"float":"right", marginTop:10, marginRight:10}} onClick={that.handleCancel.bind(this)}/>

      </Paper>
     )
    return (

      <div>
        { this.props.pid ? <Form /> : null }
      </div>



    );
  }
}
