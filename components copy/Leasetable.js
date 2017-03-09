import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const TableExampleSimple = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Type</TableHeaderColumn>
        <TableHeaderColumn>Description</TableHeaderColumn>
        <TableHeaderColumn>Date</TableHeaderColumn>
        <TableHeaderColumn>Attachment</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>Board Memo Package</TableRowColumn>
        <TableRowColumn>RFP Board Memo</TableRowColumn>
        <TableRowColumn>06/03/2015</TableRowColumn>
        <TableRowColumn><a href="#">BM - 100401.pdf</a></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Board Memo Package</TableRowColumn>
        <TableRowColumn>Tentative Designation Board Memo</TableRowColumn>
        <TableRowColumn>12/01/2015</TableRowColumn>
        <TableRowColumn><a href="#">BM - 101515.pdf</a></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Lease Doc</TableRowColumn>
        <TableRowColumn>Lease Agreement 100101.pdf</TableRowColumn>
        <TableRowColumn>06/03/2015</TableRowColumn>
        <TableRowColumn><a href="#">Lease Agreement 100101.pdf</a></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Lease Amendment</TableRowColumn>
        <TableRowColumn>Lease Agreement 111111.pdf</TableRowColumn>
        <TableRowColumn>06/03/2015</TableRowColumn>
        <TableRowColumn><a href="#">Lease Agreement 111111.pdf</a></TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default TableExampleSimple;