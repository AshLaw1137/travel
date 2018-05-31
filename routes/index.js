
var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Subscribe = require('../models/Subscriber');
var Upload = require('../models/Upload');
var path = require('path');

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
router.get('/destination', function(req, res, next){
  res.render('destination', {title: 'DestiNation: Places'});
});

/* GET subscribe page */
router.get('/subscribe', function(req, res, next){
  res.render('subscribe', {title: 'DN: Subscribe'});
});

//subscribing
router.post('/subscriber', function(req, res, next){

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

/* GET uploads page */
router.get('/upload', function(req, res, next){
  res.render('upload', {title: 'Upload'});
});

/* uploading */
router.post('/upload', function(req, res, next){
    console.log(req.file);
    if (req.files){
      let uploaded_image = req.files.uploaded_image;
      uploaded_image.mv('./public/images/'+uploaded_image.name, function(err){
            if (err)
              return res.status(500).send(err);
              
            console.log('File Uploaded');
        });
    }
    res.redirect('/upload');
});

// router.post('/uploads', function(req, res, next){
//   console.log('Uploading');

//   if(req.files){
//     let imageUp = req.files.uploaded_image;
//     // res.send(uploaded_image.name);
//     uploaded_image.mv('./public/images/'+uploaded_image.name, function(err){
//       if (err)
//         return res.status(500).send(err);

//         console.log(uploaded_image);
//           console.log('FILE UPLOADED');
//     });
//   }

//   res.send('Uploaded');
// });

module.exports = router;
