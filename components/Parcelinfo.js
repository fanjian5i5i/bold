import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
export default class Parcelinfo extends Component {
    render() {
    
        return (
            <div >
                <Card>
                    <CardTitle title="Parcel" subtitle="Summary" />
                    <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
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
