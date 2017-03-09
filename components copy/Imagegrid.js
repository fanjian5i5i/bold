import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import Dialog from 'material-ui/Dialog';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import ContentAdd from 'material-ui/svg-icons/content/create';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import FileUpload from 'react-fileupload';
import Badge from 'material-ui/Badge';
import Grid from './Grid';
import $ from "jquery";
var WPAPI = require( 'wpapi' );
var wp = new WPAPI({
    endpoint: 'http://s21451.p611.sites.pressdns.com/wp-json',
    // This assumes you are using basic auth, as described further below
    username: "jian.fan",
    password: "t$k$CtyNSkt&J#n$fBpTbsdi"
});


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding:8,
    marginRight:8
  },
  gridList: {
    width: "100%",
    height: 400,
    overflow: 'hidden',
    marginBottom: 24
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    width: '100%',
    opacity: '0'
  },
  gridContentStyle : {
    width: '100%',
    maxWidth: 'none',
    height: 1000,
    maxHeight:'none'
  }
};


var GridListExampleSimple = React.createClass ({

  getInitialState() {
    return {
      open: false,
      preview_open:false,
      file:null,
      snackbar_open:false,
      tilesData:[{
        source_url: 'http://preview.byaviators.com/template/realsite/assets/img/tmp/medium/1.jpg',
        pid: '0000000000',
        updated: '6/6/2016'
      }]
    };
  },
  componentDidMount(){
    var that = this;
    $.ajax({
          type: 'GET',
          url: 'http://s21451.p611.sites.pressdns.com/wp-json/wp/v2/media?parent='+that.props.projectID,
        }).done(function(res){
          if(res.length != 0){
            that.setState({"tilesData":res});
          }



      });
  },
  handleOpen()  {
    this.setState({open: true});
  },

  handleClose()  {
    this.setState({open: false});
  },
  handlePreviewClose(){
    this.setState({preview_open:false});
  },
  handleSubmit(e){
    var that = this;
    var wp = new WPAPI({
        endpoint: 'http://s21451.p611.sites.pressdns.com/wp-json',
        // This assumes you are using basic auth, as described further below
        username: this.state.userid,
        password: this.state.password
    });
    // console.log(that.state.file)
    wp.media()
    // Specify a path to the file you want to upload
    .file( "/home/fanjian5i5i/Desktop/bitbucket/bold/img/2.jpg")
    .create({
        title: 'My awesome image',
        alt_text: 'an image of something awesome',
        caption: 'This is the caption text',
        description: 'More explanatory information'
    })
    .then(function( response ) {
          var newImageId = response.id;
          return wp.media().id( newImageId ).update({
              post: that.props.projectID
          });
    })
    .then(function( response ) {
          console.log(response)
    });
  },
  onFileLoad(e){
    console.log(e.target);
    // console.log(e.target.result);
    var that = this;
    $.ajax({
          type: 'GET',
          url: 'http://localhost:3000/api/isloggedin',
          statusCode: {
            200: function(){
              // var edit = !that.state.edit
              that.setState({"file":e.target.result,preview_open:true})
            },
            404: function(){
              console.log("not in")
              that.setState({
                snackbar_open: true,
              });
            }
          }

      }).done(function(res){
        that.setState({userid:res.userid,password:res.password})

      });

  },
  handleImageChange(e) {
    e.persist();
    var that = this;
    $.ajax({
          type: 'GET',
          url: 'http://localhost:3000/api/isloggedin',
          statusCode: {
            200: function(){
              wp.media()
              // Specify a path to the file you want to upload
              .file(e.target.files[0])
              .create({
                  title: 'My awesome image',
                  alt_text: 'an image of something awesome',
                  caption: 'This is the caption text',
                  description: 'More explanatory information'
              })
              .then(function( response ) {
                    var newImageId = response.id;
                    return wp.media().id( newImageId ).update({
                        post: that.props.projectID
                    });
              })
              .then(function( response ) {
                    console.log(response);
                    // browserHistory.push('/');
                    window.location.reload();
              });

            },
            404: function(){
              console.log("not in")
              that.setState({
                snackbar_open: true,
              });
            }
          }

      });



  },
  render(){
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ]
    const options={
        baseUrl:'http://127.0.0.1',
        param:{
            fid:0
        }
    }
    const previewActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handlePreviewClose}
      />,
      <FlatButton
        label="Sumbit"
        primary={true}
        onTouchTap={this.handleSubmit}
      />
    ]
    return(

      <div style={styles.root}>
        <Dialog
              title="Project Pictures"
              actions={actions}
              modal={false}
              contentStyle={styles.gridContentStyle}
              open={this.state.open}

              onRequestClose={this.handleClose}
            >
              <Grid tilesData={this.state.tilesData}/>
            </Dialog>
        <Dialog
              title="Upload Picture"
              actions={previewActions}
              modal={false}
              open={this.state.preview_open}

              onRequestClose={this.handlePreviewClose}
            >
              <img src={this.state.file} style={{height:450}}/>

            </Dialog>
        <Snackbar
          open={this.state.snackbar_open}
          message="Please log in."
          autoHideDuration={3000}
        />
        <Badge
        badgeContent={this.state.tilesData.length}
        primary={true}
        badgeStyle={{top: -6, right: -6}}
        style={{padding:0,marginBottom:-25}}
        >


        <GridList
          cols={1}
          cellHeight={200}
          padding={1}
          style={styles.gridList}

        >
          {this.state.tilesData.map((tile) => (
            <GridTile
              style={{"overflow":"hidden"}}
              key={tile.source_url}
              title={<span>PID: <b>{tile.id}</b></span>}
              subtitle={<span>Updated: <b>{tile.date}</b></span>}
              actionIcon={<RaisedButton
                            label="ADD"
                            labelPosition="before"
                            primary={true}
                            style={{"marginRight":"8","cursor": "pointer"}}
                            >
                            <input id="imageButton" style={styles.exampleImageInput} type="file" onChange={this.handleImageChange}></input>
                          </RaisedButton>}
              cols={1}
              rows={2}
            >
              <img src={tile.source_url} onTouchTap={this.handleOpen} style={{"cursor":"pointer"}}/>
            </GridTile>
          ))}
        </GridList>
        </Badge>
      </div>
    )
    }


});

export default GridListExampleSimple;
