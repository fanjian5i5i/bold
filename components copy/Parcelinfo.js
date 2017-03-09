import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/create';
import TextField from 'material-ui/TextField';
import $ from "jquery";
import Parceldetail from './Parceldetail';
import Parceldetailedit from './Parceldetailedit';
// import Lotinfo from './Lotinfo';
import Leaseinfo from './Leaseinfo';
import Snackbar from 'material-ui/Snackbar';
const styles = {
  header:{
    background:"#00a6b4"
  },
  back:{
    background:"rgb(238, 238, 238)"
  },
  btn:{
    marginTop:"-3%",
    marginLeft:"90%",
    background:"#00a6b4"
  }
}

var Parcelinfo = React.createClass({
  getInitialState:function(){
    return {
      open:false,
      edit:false,
    }
  },
  handler(){
    this.setState({edit:false});
  },
    taggleEdit(){
      var that = this;
      $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/api/isloggedin',
            statusCode: {
              200: function(){
                var edit = !that.state.edit
                that.setState({edit: edit});
              },
              404: function(){
                that.setState({
                  open: true,
                });
              }
            }

        });

    },
    render() {
      const parceldetial = [
        this.state.edit ? <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12"><Parceldetailedit parcel={this.props.parcel} handler={this.handler}/></div>
        </div> : <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12"><Parceldetail parcel={this.props.parcel} handler={this.handler}/></div>
        </div>
      ]
        return (
            <div >
                <Card className="parcel-card">
                    <CardTitle title="Parcel" subtitle="Summary" style={styles.header} titleColor={"white"}/>
                    <FloatingActionButton style={styles.btn} onTouchTap={this.taggleEdit}>
                      <ContentAdd />
                    </FloatingActionButton>
                    <CardText>

                      {parceldetial}
                    </CardText>
                  </Card>
                  <Snackbar
                    open={this.state.open}
                    message="Please Login"
                    autoHideDuration={4000}
                  />
            </div>
        );
    }
});
export default Parcelinfo;
