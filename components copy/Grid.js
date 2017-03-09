import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    key:1,
    img: 'http://s21451.p611.sites.pressdns.com/wp-content/uploads/2017/01/sample-1.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    key:2,
    img: 'http://s21451.p611.sites.pressdns.com/wp-content/uploads/2017/01/sample-1.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    key:3,
    img: 'http://s21451.p611.sites.pressdns.com/wp-content/uploads/2017/01/sample-1.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    key:4,
    img: 'http://s21451.p611.sites.pressdns.com/wp-content/uploads/2017/01/sample-1.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  }
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
 var Grid = React.createClass ({

   getInitialState() {
     return {
       open: false,
       tilesData:[{
         source_url: 'http://preview.byaviators.com/template/realsite/assets/img/tmp/medium/1.jpg',
         pid: '0000000000',
         updated: '6/6/2016'
       }]
     };
   },
   render(){
     return (
    <div style={styles.root}>
      <GridList style={styles.gridList} cellHeight={400} cols={1.1}>
        {this.props.tilesData.map((tile) => (
          <GridTile
            key={tile.link}
          >
            <img src={tile.source_url} />
          </GridTile>
        ))}
      </GridList>
    </div>
  );
  }
});

export default Grid;
