import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import $ from "jquery";
import Reactable from 'reactable';
import FontIcon from 'material-ui/FontIcon';
require("../client/app.css")

export default class TableExampleComplex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      "projects":""
    };
  }
  componentDidMount(){
    var that = this;
    $.ajax({
          type: 'GET',
          url: 'http://localhost:3000/api/projects',
          contentType: "application/json",
      }).done(function(res){
        that.setState(res);
        console.log(that.state);
      });
  };
  render(){
    var sortStyle = {
        color:"rgb(242, 85, 32)",
        textAlign:"center",
        top:4,
        left:8,
        cursor:"pointer"


    }
    var Table = Reactable.Table,
    Thead = Reactable.Thead,
    Th = Reactable.Th,
    Tr = Reactable.Tr,
    Td = Reactable.Td;

    return (

      <Table className="table" id="table" data={this.state.projects} filterable={['projectName']}
              sortable={[

                  'pid',
                  'projectName'
              ]}
        defaultSort={{column: 'projectName', direction: 'asc'}}
     >
     <Thead>
        <Th column="pid">
          <b className="name-header">
            PID
          </b>
          <FontIcon className="material-icons" style={sortStyle}>sort</FontIcon>
        </Th>
        <Th column="projectName">
          <b className="age-header">Project Name</b>
          <FontIcon className="material-icons" style={sortStyle}>sort</FontIcon>
        </Th>
        <Th column="street">
          <b className="age-header">Street</b>
        </Th>
        <Th column="neighborhood">
          <b className="age-header">Neighborhood</b>
        </Th>
        <Th column="urbanrenewalarea">
          <b className="age-header">Urban Renewal Area</b>
        </Th>
        <Th column="sitetype">
          <b className="age-header">Site Type</b>
        </Th>
        <Th column="lotsize">
          <b className="age-header">Lot Size</b>
        </Th>
      </Thead>
     </Table>
    );
  }

}
