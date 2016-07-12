import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding:8
  },
  gridList: {
    width: "100%",
    height: 610,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const tilesData = [
  {
    img: 'http://preview.byaviators.com/template/realsite/assets/img/tmp/medium/1.jpg',
    pid: '0203506500',
    updated: '6/6/2016',
    featured: true,
  },
  {
    img: 'http://preview.byaviators.com/template/realsite/assets/img/tmp/medium/2.jpg',
    pid: '0203506500',
    updated: '6/6/2016',
  },
  {
    img: 'http://preview.byaviators.com/template/realsite/assets/img/tmp/medium/4.jpg',
    pid: '0203506500',
    updated: '6/6/2016',
  }
];

const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
      cols={2}
      cellHeight={200}
      padding={1}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={<span>PID: <b>{tile.pid}</b></span>}
          subtitle={<span>Updated: <b>{tile.updated}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;