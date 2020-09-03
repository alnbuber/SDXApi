var express = require('express');
var router = express.Router();
var http = require('http');

/* GET users listing. */
// router.get('/', function(req, res) {

//   messagesURL = 'http://jsonplaceholder.typicode.com/posts?userId=8';

//   http.request(messagesURL, function(response) {
//     response.pipe(res);
//   }).on('error', function(e) {
//     res.sendStatus(500);
//   }).end();

// });

router.get('/u', function(req, res) {

  let userId = req.query.userId;
  console.log('userId: ' + userId);

  messagesURL = 'http://jsonplaceholder.typicode.com/posts?userId='+userId;

  http.request(messagesURL, function(response) {
    response.pipe(res);
  }).on('error', function(e) {
    res.sendStatus(500);
  }).end();
});

module.exports = router;
