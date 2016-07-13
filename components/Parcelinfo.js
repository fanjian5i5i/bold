import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import Parcedetail from './Parcedetail';
import Lotinfo from './Lotinfo';
export default class Parcelinfo extends Component {
    render() {
    
        return (
            <div >
                <Card>
                    <CardTitle title="Parcel" subtitle="Summary" />
                    <CardText>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12"><Parcedetail/></div>
                        <div className="col-lg-6 col-md-12 col-sm-12"><Lotinfo/></div>
                      </div>
                    </CardText>
                    <CardActions>
                      <FlatButton label="Action1" />
                      <FlatButton label="Action2" />
                    </CardActions>
                  </Card>

            </div>
        );
    }
}
