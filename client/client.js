import React from 'react'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';



import AppBarSearch from '../components/Appbar';

// import App from '../components/App'
const muiTheme = getMuiTheme({
  // palette: {
  //   textColor: cyan500,
  // },
  appBar: {
    // height: 50,
  },
});
const style1 = {
  width:800,
  height:600
}
const style2 = {
  width:400,
  height:600
}
const App = () => (
  <div>
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBarSearch />

  </MuiThemeProvider>
  <MuiThemeProvider>
    <div className="row">
      <div className="col-lg-8"><Paper style={style1} zDepth={1} /></div>
      <div className="col-lg-4"><Paper style={style2} zDepth={1} /></div>
    </div>

  </MuiThemeProvider>
  </div>
);

ReactDOM.render(
	<App/>,
	document.getElementById('app')
)