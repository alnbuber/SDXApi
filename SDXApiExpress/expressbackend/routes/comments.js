var express = require('express');
var router = express.Router();
var http = require('http');

// get-request for comments
router.get('/', function(req, res) {
    let postId = req.query.postId;
    postURL = 'http://jsonplaceholder.typicode.com/comments/?postId='+postId;

    http.request(postURL, function(response) {
        response.pipe(res);
    }).on('error', function(e) {
        res.sendStatus(500);
    }).end();
});

module.exports = router;