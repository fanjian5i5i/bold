import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import $ from "jquery";
import Reactable from 'reactable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LinearProgress from 'material-ui/LinearProgress';
import { Router, browserHistory } from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';
import ActionLeft from 'material-ui/svg-icons/av/skip-previous';
import ActionRight from 'material-ui/svg-icons/av/skip-next';
require("../client/app.css");
var WP = require( 'wpapi' );
var wp = new WP({ endpoint: 'http://10.241.104.211:8080/wp-json' });
const muiTheme = getMuiTheme({
  // palette: {
  //   textColor: cyan500,
  // },
  appBar: {
    // height: 50,
  },
});
export default class ProjectTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      "projects":[],
      "display":"",
      total: 31,
      pageDisplay: 7,
      number: 7,
      current:1
    };
  }
  componentDidMount(){
    // var input = $('.reactable-filter-input');
    // input.attr('placeholder') = 2;
    // console.log($('.reactable-filter-input'));
    var that = this;
    $.ajax({
          type: 'GET',
          url: 'http://localhost:3000/api/parcels',
          // contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          // crossDomain: true,
          // dataType: 'json',
        }).done(function(res,textStatus, request){
          // console.log(request.getResponseHeader("X-WP-TotalPages"));

        // that.setState({"projects":res,"display":"none", total:request.getResponseHeader("X-WP-TotalPages")});

        that.setState({"projects":res[0].concat(res[1]).concat(res[2]).concat(res[3]).concat(res[4]).concat(res[5]).concat(res[6]),"display":"none"});

      });
  };
  handleRowClick(project,e){
    e.preventDefault;
    console.log(project);
    browserHistory.push('/#/project/'+project.id);
    window.location.reload();
  };
  handlePageChange(value){
    var that = this;
    console.log(value);
    // that.setState({display:""});

    // $.ajax({
    //       type: 'GET',
    //       url: 'http://s21451.p611.sites.pressdns.com/wp-json/wp/v2/parcels?per_page=20&page=' + value,
    //       // contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    //       // crossDomain: true,
    //       // dataType: 'json',
    //     }).done(function(res,textStatus, request){
    //       console.log(request.getResponseHeader("X-WP-TotalPages"));
    //
    //     that.setState({"projects":res,"display":"none", current:value, total:request.getResponseHeader("X-WP-TotalPages")});
    //     // console.log(res);
    //     // res.forEach(function(project){
    //     //   that.setState(res);
    //     //   console.log(project);
    //     // });
    //     // console.log(that.state);
    //   });
  }
  render(){
    var sortStyle = {
        color:"#00a6b4",
        textAlign:"center",
        top:4,
        left:8,
        cursor:"pointer"


    }
    var pageStyle = {
      textAlign: "center",
      // bottom: 10,
      position: "relative",
      padding: 15,
      marginTop: -32,
      backgroundColor:"white"
        }
    var Table = Reactable.Table,
    Thead = Reactable.Thead,
    Tbody = Reactable.Tbody,
    Th = Reactable.Th,
    Tr = Reactable.Tr,
    Td = Reactable.Td;
    var that = this;
    var tableContent;
    tableContent = this.state.projects.map(function(project) {
      // console.log(project);
      // var neighborhood = project.acf.neighborhood.name ? project.acf.neighborhood.name : "";
      // console.log(neighborhood);
      if(!project.acf){
        project.acf = {
          pid:"",
          neighborhood:"",
          st_num:"",
          st_name:"",
          lot_size:""
        }
      }
      if(!project.acf.neighborhood){
        project.acf.neighborhood = {"name":""}
      }
      return (
        <Tr onClick={that.handleRowClick.bind(this, project)}>
            <Td column="pid">
              {project.acf.pid}
            </Td>
            <Td column="projectName">
              {project.acf.st_num + " " + project.acf.st_name}
            </Td>
            <Td column="neighborhood">
              {project.acf.neighborhood.name}
            </Td>
            <Td column="site">
              {project.acf.site}
            </Td>
            <Td column="lotsize">
              {Number(project.acf.lot_size)}
            </Td>
        </Tr>
      );
    });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div style={{backgroundColor: "#00a6b4"}}>
      <LinearProgress mode="indeterminate" style={{"display":this.state.display}}/>
      <Table className="table" id="table"
              sortable={[

                  'pid',
                  'projectName',
                  'neighborhood',
                  'site',
                  'lotsize'
              ]}
        defaultSort={{column: 'projectName', direction: 'desc'}}
        sortable={true}
        filterable={['pid', 'projectName','neighborhood','site','lotsize']}
        noDataText="Loading..."
        previousPageLabel={<IconButton tooltip="Previous Page">
        onPageChange = {this.handlePageChange}
      <ActionLeft/>

    </IconButton>}
        nextPageLabel ={<IconButton tooltip="Next Page">
      <ActionRight/>

    </IconButton>}
        itemsPerPage={10} pageButtonLimit={10}
     >
     <Thead>
        <Th column="pid">
          <b className="name-header">
            PID
          </b>
          <FontIcon className="material-icons" style={sortStyle}>swap_vert</FontIcon>
        </Th>
        <Th column="projectName">
          <b className="age-header">Project Name</b>
          <FontIcon className="material-icons" style={sortStyle}>swap_vert</FontIcon>
        </Th>
        <Th column="neighborhood">
          <b className="age-header">Neighborhood</b>
          <FontIcon className="material-icons" style={sortStyle}>swap_vert</FontIcon>
        </Th>

        <Th column="site">
          <b className="age-header">Site</b>
          <FontIcon className="material-icons" style={sortStyle}>swap_vert</FontIcon>
        </Th>
        <Th column="lotsize">
          <b className="age-header">Lot Size</b>
          <FontIcon className="material-icons" style={sortStyle}>swap_vert</FontIcon>
        </Th>
      </Thead>
      {tableContent}


     </Table>
     </div>
     </MuiThemeProvider>
    );
  }

}
