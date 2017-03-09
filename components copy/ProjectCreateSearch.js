import { default as React, Component } from "react";
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import { GoogleMap,GoogleMapLoader,Marker } from "react-google-maps";
import ProjectCreateForm from "./ProjectCreateForm";
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import $ from "jquery";


// import InfoWindow from "react-google-maps/lib//InfoWindow";
/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
 //      {<RaisedButton label="Next" primary={true} style={style.btnStyle}/>}
export default class ProjectCreateSearch extends Component {
  /*
   * 1. Create a component that wraps all your map sub-components.
   */
   constructor(props) {
     super(props);

     this.state = {
       "latlng":{lat: 42.3601, lng: -71.0589},
       "markerLL":{},
       "zoom":12,
       "pid":"",
       "showMap":true
     };
   }
   Search(e){
     var that = this;
     var address = this.refs.address.value;
     if(e.which === 13){

       console.log(address);
       if (address.length == 10){
        //  console.log(address.length)
         var queryStr = "https://data.cityofboston.gov/resource/g5b5-xrwi.json?pid=" + address;
        //  "http://gis.cityofboston.gov/arcgis/rest/services/Parcels/Parcels16/MapServer/find?searchText=0302615000&contains=true&searchFields=PID_LONG&sr=&layers=0&layerDefs=&returnGeometry=false&maxAllowableOffset=&geometryPrecision=&dynamicLayers=&returnZ=false&returnM=false&gdbVersion=&f=pjson"
         $.ajax({
               url:queryStr,
               sonp: "callback",
               dataType: "json",
               success:function(data){
                 if(data){
                   console.log(data);
                  //  that.setState({showMap:false})
                  var lat = parseFloat(data[0].latitude);
                  var lng = parseFloat(data[0].longitude);
                  console.log(lat + ":::::" + lng)
                  var pid = data[0].pid;
                  that.setState({latlng:{lat:lat, lng: lng},markerLL:{lat:lat, lng: lng},zoom:19,pid:pid, parcel:data[0]});
                 }
               }
             });
       }else{
         var queryStr = "http://map01.cityofboston.gov/samapi/api/v1/searchq?q=" + address;
         $.ajax({
             url:queryStr,
             sonp: "callback",
             dataType: "jsonp",
             success:function(data){

               if(data.addressResults.length!=0){
                 var lat = data.addressResults[0].latitude;
                 var lng = data.addressResults[0].longitude;
                 var pid = data.addressResults[0].spatialParcelPID;
                //  that.setState({latlng:{lat:lat, lng: lng},markerLL:{lat:lat, lng: lng},zoom:19,pid:pid});
                 console.log(data);
                 queryStr = "https://data.cityofboston.gov/resource/g5b5-xrwi.json?pid=" + data.addressResults[0].spatialParcelPID;
                 $.ajax({
                       url:queryStr,
                       sonp: "callback",
                       dataType: "json",
                       success:function(data){
                         if(data){
                           console.log(data);
                          //  that.setState({showMap:false})
                          var lat = parseFloat(data[0].latitude);
                          var lng = parseFloat(data[0].longitude);
                          console.log(lat + ":::::" + lng)
                          var pid = data[0].pid;
                          that.setState({latlng:{lat:lat, lng: lng},markerLL:{lat:lat, lng: lng},zoom:19,pid:pid, parcel:data[0]});
                         }
                       }
                     });

               }else{
                 alert("Cannot find address or parcel ID");
               }
             }
           });
         }
     }

   }
  render() {
    /*
     * 2. Render GoogleMap component with containerProps
     */
     const style={
       cardStyle:{
         backgroundColor:"#e6e6e6"
       },
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
            backgroundColor:"#e6e6e6"
       },
       cardText:{
         paddingBottom:50
       }
     }

    return (
      <Card style={style.cardStyle}>
      <CardTitle
      title="Create BOLD Project"
      titleColor="white"
      style={{backgroundColor:"#00a6b4"}}
      />
      <CardText style={style.cardText}>
      <Paper style={style.paper}>
        <Subheader style={style.headerStyle}>Address</Subheader>

        <input className="reactable-filter-input" placeholder="Please type in address" ref="address" onKeyDown={this.Search.bind(this)}/>
        { this.state.showMap ? <GoogleMapLoader
          containerElement={
            <div
              style={{
                height: 400,
                margin:8,
              }}
            />
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => console.log(map)}
              zoom={this.state.zoom}
              center={this.state.latlng}
              onClick={this.handleMapClick}>
              <Marker
                    position={this.state.markerLL} >
              </Marker>
            </GoogleMap>
          }
        /> : null }
      </Paper>

        <ProjectCreateForm pid={this.state.pid} parcel={this.state.parcel} latlng={this.state.latlng} />

      </CardText>
      </Card>
    );
  }
}
