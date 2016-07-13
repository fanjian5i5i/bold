import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Parcedetail from './Parcedetail';
import Lotinfo from './Lotinfo';
import Leaseinfo from './Leaseinfo';
const styles = {
  header:{
    background:"#f25520"
  },
  back:{
    background:"rgb(238, 238, 238)"
  },
  floatBtn:{
    marginTop:-44
  }
}
export default class Parcelinfo extends Component {
    render() {
    
        return (
            <div >
                <Card >
                    <CardTitle title="Parcel" subtitle="Summary" style={styles.header} titleColor={"white"}/>

                    <CardText style={styles.back}>
                      <div className="row" style={styles.floatBtn}>
                        <div className="col-lg-1 col-lg-offset-11 col-md-1 col-md-offset-11 col-sm-1 col-sm-offset-11">
                          <FloatingActionButton backgroundColor={"#BF360C"}>
                            <ContentAdd />
                          </FloatingActionButton>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12"><Parcedetail/></div>
                        <div className="col-lg-6 col-md-12 col-sm-12"><Lotinfo/></div>
                      </div>
                      <div className="row">

                          <div className="col-lg-12 col-md-12 col-sm-12"><Leaseinfo/></div>
                          
                      </div>
                    </CardText>
                  </Card>

            </div>
        );
    }
}
