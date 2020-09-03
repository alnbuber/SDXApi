var express = require('express');
var router = express.Router();
var http = require('http');

router.get('/', function(req, res) {

  messagesURL = 'http://jsonplaceholder.typicode.com/users';

  http.request(messagesURL, function(response) {
    response.pipe(res);
  }).on('error', function(e) {
    res.sendStatus(500);
  }).end();
});

module.exports = router;
