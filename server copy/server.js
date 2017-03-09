var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var request = require('request');
const fs = require('fs');
var auth = require('./auth/auth.json');
var WP = require( 'wpapi' );
var wp = new WP({ endpoint: 'http://s21451.p611.sites.pressdns.com/wp-json' });
var wp = new WP({
    endpoint: 'http://s21451.p611.sites.pressdns.com/wp-json',
    // This assumes you are using basic auth, as described further below
    username: auth.wp.users[0].userid,
    password: auth.wp.users[0].password
});
var passport = require('passport');
var Strategy = require('passport-http').BasicStrategy;
var db = require('./auth/bolduser');

var boldProjectCache = [];
var UpdateProject = function(){
  boldProjectCache = [];
  request('http://s21451.p611.sites.pressdns.com/wp-json/wp/v2/parcels?per_page=100', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(JSON.parse(body)) // Show the HTML for the Google homepage.
      boldProjectCache.push(JSON.parse(body));
      request('http://s21451.p611.sites.pressdns.com/wp-json/wp/v2/parcels?per_page=100&page=2', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          // console.log(JSON.parse(body)) // Show the HTML for the Google homepage.
          boldProjectCache.push(JSON.parse(body));
          request('http://s21451.p611.sites.pressdns.com/wp-json/wp/v2/parcels?per_page=100&page=3', function (error, response, body) {
            if (!error && response.statusCode == 200) {
              // console.log(JSON.parse(body)) // Show the HTML for the Google homepage.
              boldProjectCache.push(JSON.parse(body));
              request('http://s21451.p611.sites.pressdns.com/wp-json/wp/v2/parcels?per_page=100&page=4', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                  // console.log(JSON.parse(body)) // Show the HTML for the Google homepage.
                  boldProjectCache.push(JSON.parse(body));
                  request('http://s21451.p611.sites.pressdns.com/wp-json/wp/v2/parcels?per_page=100&page=5', function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                      // console.log(JSON.parse(body)) // Show the HTML for the Google homepage.
                      boldProjectCache.push(JSON.parse(body));
                      request('http://s21451.p611.sites.pressdns.com/wp-json/wp/v2/parcels?per_page=100&page=6', function (error, response, body) {
                        if (!error && response.statusCode == 200) {
                          // console.log(JSON.parse(body)) // Show the HTML for the Google homepage.
                          boldProjectCache.push(JSON.parse(body));
                          request('http://s21451.p611.sites.pressdns.com/wp-json/wp/v2/parcels?per_page=100&page=7', function (error, response, body) {
                            if (!error && response.statusCode == 200) {
                              // console.log(JSON.parse(body)) // Show the HTML for the Google homepage.
                              boldProjectCache.push(JSON.parse(body));
                            }
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })
}
UpdateProject();


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

var loggedUser = [];
// app.UseCors(CorsOptions.AllowAll);

var port = 3000;
var router = express.Router();
router.get('/projects',function(req,res){
  // console.log(projects);
  res.send(projects);
});
router.get('/parcels',function(req,res){

  // request('http://s21451.p611.sites.pressdns.com/wp-json/wp/v2/parcels', function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     // console.log(JSON.parse(body)) // Show the HTML for the Google homepage.
  //     res.send(JSON.parse(body));
  //   }
  // })
  console.log(boldProjectCache.length)
  res.send(boldProjectCache);
});
router.get('/owners',function(req,res){

  request('http://s21451.p611.sites.pressdns.com/wp-json/wp/v2/owners', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(JSON.parse(body)) // Show the HTML for the Google homepage.
      res.send(JSON.parse(body));
    }
  })
});
router.get('/neighborhoods',function(req,res){

  request('http://s21451.p611.sites.pressdns.com/wp-json/wp/v2/neighborhoods?per_page=100', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(JSON.parse(body)) // Show the HTML for the Google homepage.
      res.send(JSON.parse(body));
    }
  })
});
router.get('/currentuses',function(req,res){

  request('http://s21451.p611.sites.pressdns.com/wp-json/wp/v2/currentuses?per_page=100', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(JSON.parse(body)) // Show the HTML for the Google homepage.
      res.send(JSON.parse(body));
    }
  })
});

router.get('/urareas',function(req,res){

  request('http://s21451.p611.sites.pressdns.com/wp-json/wp/v2/urareas?per_page=100', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(JSON.parse(body)) // Show the HTML for the Google homepage.
      res.send(JSON.parse(body));
    }
  })
});
router.get('/statuses',function(req,res){

  request('http://s21451.p611.sites.pressdns.com/wp-json/wp/v2/projectstatus?per_page=30', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(JSON.parse(body)) // Show the HTML for the Google homepage.
      res.send(JSON.parse(body));
    }
  })
});
router.get('/preferreduses',function(req,res){

  request('http://s21451.p611.sites.pressdns.com/wp-json/wp/v2/preferreduses', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(JSON.parse(body)) // Show the HTML for the Google homepage.
      res.send(JSON.parse(body));
    }
  })
});
router.get('/responsibledepts',function(req,res){

  request('http://s21451.p611.sites.pressdns.com/wp-json/wp/v2/responsible_dept', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(JSON.parse(body)) // Show the HTML for the Google homepage.
      res.send(JSON.parse(body));
    }
  })
});
router.get('/projectmanagers',function(req,res){

  request('http://s21451.p611.sites.pressdns.com/wp-json/wp/v2/projectmanagers', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(JSON.parse(body)) // Show the HTML for the Google homepage.
      res.send(JSON.parse(body));
    }
  })
});


router.get('/parcel/:parcelID',function(req,res){
  var parcels = [];
  // res.send(req.params);
  console.log(req.params.parcelID);
  request('http://s21451.p611.sites.pressdns.com/wp-json/wp/v2/parcels/'+req.params.parcelID, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(JSON.parse(body)) // Show the HTML for the Google homepage.
      res.send(body);
    }
  })
});
router.get('/updatetest',function(req,res){
  console.log(req.query.acf);
  var formData = {
    "fields":req.query.acf
  }
  request.post({
    url:'http://s21451.p611.sites.pressdns.com/wp-json/acf/v2/parcels/'+req.query.id,
    json:formData,
    auth:{
      user:auth.wp.users[0].userid,
      pass:auth.wp.users[0].password
    }
  }, function optionalCallback(err, httpResponse, body) {
    if (err) {
      return res.send('upload failed:', err);
    }
    console.log(res);
    UpdateProject();
    res.status(200).send({"message":"Success"});
  });


});
router.get('/create',function(req,res){
  var response = res;
  console.log(req.query);
  // var formData = {
  //   "fields":req.query.acf
  // }
  request.post({
    url:'http://s21451.p611.sites.pressdns.com/wp-json/wp/v2/parcels/',
    auth:{
      user:auth.wp.users[0].userid,
      pass:auth.wp.users[0].password
    },
    json:{status:"publish",title:req.query.pid}

  }, function optionalCallback(err, httpResponse, body) {
    if (err) {
      return res.send('upload failed:', err);
    }
    var parcelID = body.id;
    var data = {fields:req.query.acf};
    data.fields.currentuse=[];
    data.fields.preferreduse=[];
    data.fields.neighborhood=[];
    data.fields.projectstatus=[];
    data.fields.responsible_pm=[];
    data.fields.responsible_dept=[];

    // var parcelID = JSON.parse(respond[1]).id.toString();
    // console.log(req.query);
    request.post({
      url:'http://s21451.p611.sites.pressdns.com/wp-json/acf/v2/parcels/' + parcelID,
      auth:{
        user:auth.wp.users[0].userid,
        pass:auth.wp.users[0].password
      },
      json:data

    }, function optionalCallback(err, httpResponse, body) {
      if (err) {
        return res.send('upload failed:', err);
      }
      response.send({"status":"OK","id":parcelID});
    });
  });



});

router.get('/mediatest',function(req,res){
  wp.media()
  // Specify a path to the file you want to upload
  .file( '/home/fanjian5i5i/Desktop/bitbucket/bold/img/2.jpg' )
  .create({
      title: 'My awesome image',
      alt_text: 'an image of something awesome',
      caption: 'This is the caption text',
      description: 'More explanatory information'
  })
  // .then(function( response ) {
  //     // Your media is now uploaded: let's associate it with a post
  //     var newImageId = response.id;
  //     return wp.media().id( newImageId ).update({
  //         post: "50"
  //     });
  // })
  .then(function( response ) {
      console.log( 'Media ID #' + response);
      // console.log( 'is now associated with Post ID #' + response.post );
  });
});
router.get('/mediaupload',function(req,res){
  console.log(req.query);
  // wp.media()
  // // Specify a path to the file you want to upload
  // .file(  )
  // .create({
  //     title: 'My awesome image',
  //     alt_text: 'an image of something awesome',
  //     caption: 'This is the caption text',
  //     description: 'More explanatory information'
  // })
  // // .then(function( response ) {
  // //     // Your media is now uploaded: let's associate it with a post
  // //     var newImageId = response.id;
  // //     return wp.media().id( newImageId ).update({
  // //         post: "50"
  // //     });
  // // })
  // .then(function( response ) {
  //     console.log( 'Media ID #' + response);
  //     // console.log( 'is now associated with Post ID #' + response.post );
  // });
});
passport.use(new Strategy(
  function(email, password, cb) {
    db.findByEmail(email, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      // if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));
// router.get('/login', function(req, res) {
// 	console.log(req.query);
// 	var validator = 0;
// 	var userid, password = "";
// 	auth.wp.users.forEach(function(user){
// 		if(req.query.email===user.email){
// 			// res.sendStatus(200);
// 			console.log("in");
// 			console.log(user.email);
// 			userid = user.userid;
// 			password = user.password;
// 			validator += 1;
//       loggedUser.push(user);
// 		}
// 	});
// 	if(validator==0){
// 		res.sendStatus(404);
// 	}else{
// 		// res.sendStatus(200);
//
//     res.send(req.query.email);
// 	}
//
//
// });
router.get('/login',passport.authenticate('basic', { session: false }),
  function(req, res) {
    console.log(req);
    res.json({ username: req.user.username, email: req.user.email });
  });

router.get('/isloggedin',passport.authenticate('basic', { session: false }),
  function(req, res) {
    // console.log(req.isAuthenticated());
    if(req.isAuthenticated()){
      res.json({ username: req.user.username, email: req.user.email });
    }
    else {
      res.sendStatus(401)
    }

  });
// router.get('/isloggedin', function(req, res) {
//
//   // if(req.isAuthenticated()){
//   //   res.sendStatus(200);
//   // }
//   // else{
//   //   res.sendStatus(401);
//   // }
//   res.send(req.user)
//
//
// });

router.get('/logout', function(req, res) {
  req.logout();
  res.sendStatus(200);
});

app.use('/api', router);


app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
