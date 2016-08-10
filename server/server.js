var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var auth = require('./auth/auth.json');
var projects = require('./bold/parcels.json');
var app = express();
var compiler = webpack(config);
// console.log(auth);

app.use(webpackDevMiddleware(compiler,{noInfo:true, publicPath:config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static('./dist'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});



var port = 3000;
var router = express.Router();
router.get('/projects',function(req,res){
  // console.log(projects);
  res.send(projects);
});
router.get('/login', function(req, res) {
	console.log(req.query);
	var validator = 0;
	var userid, password = "";
	auth.wp.users.forEach(function(user){
		if(req.query.email===user.email){
			// res.sendStatus(200);
			console.log("in");
			console.log(user.email);
			userid = user.userid;
			password = user.password;
			validator += 1;
		}
	});
	if(validator==0){
		res.sendStatus(404);
	}else{
		res.sendStatus(200);
	}


});

app.use('/api', router);


app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
