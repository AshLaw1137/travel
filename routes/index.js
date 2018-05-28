
var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Subscribe = require('../models/Subscriber');

mongoose.connect('mongodb://ashlaw11:wolfsbane11@ds137650.mlab.com:37650/destination');
mongoose.connection.on('connected', function(){
  console.log(' Hey, You\'re connected to the database');
});

// app.set('view engine', 'ejs');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DestiNation' });
});

/* GET destinations page */
router.get('/destination', function(req, res){
  res.render('destination', {title: 'DestiNation: Places'});
});

/* GET subscribe page */
router.get('/subscribe', function(req, res){
  res.render('subscribe', {title: 'DN: Subscribe'});
});

//subscribing
router.post('/subscriber', function(req, res){

  var subscriber = new Subscribe();
  subscriber.first_name = req.body.first_name;
  subscriber.last_name = req.body.last_name;
  subscriber.email = req.body.email;

  subscriber.save(function (err) {
      if (error)
          res.send(err);
  });
  res.redirect('/subscribe');
});

/* GET Thailand article page */
router.get('/dest-thailand', function(req, res){
  res.render('dest-thailand', {title: 'Thailand'});
});

/* GET Tahiti article page */
router.get('/dest-tahiti', function(req, res){
  res.render('dest-tahiti', {title: 'Tahiti'});
});

/* GET St Lucia article page */
router.get('/dest-lucia', function(req, res){
  res.render('dest-lucia', {title: 'St Lucia'});
});

// router.post('/upload', function(req, res, next){
//   console.log('Uploading');

//   if(req.files){
//     let imageUp = req.files.imageUp;
//     // res.send(imageUp.name);
//     imageUp.mv('./public/images/'+imageUp.name, function(err){
//       if (err)
//         return res.status(500).send(err);

//         console.log(imageUp);
//           console.log('FILE UPLOADED');
//     });
//   }

//   res.send('Uploaded');
// });
module.exports = router;
