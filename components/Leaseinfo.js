import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import Paper from 'material-ui/Paper';

import TableExampleSimple from './Leasetable';
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  paper:{
    // margin:8,
    // padding:8
  },
  tabs:{
    background:"#f25520",

  }
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const Leaseinfo = () => (
  <Paper >
  <Tabs style={styles.paper}>
    <Tab label="Attachment" style={styles.tabs}>
      <div>
        <TableExampleSimple/>
      </div>
    </Tab>
    <Tab label="Lease" style={styles.tabs}>
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab label="Restriction" style={styles.tabs}>
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab label="Zoning" style={styles.tabs}>
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab label="Title" style={styles.tabs}>
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab label="Notes" style={styles.tabs}>
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab
      label="Contacts"
      data-route="/home"
      onActive={handleActive}
      style={styles.tabs}
    >
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
  </Paper>
);

export default Leaseinfo;