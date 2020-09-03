var express = require('express');
var router = express.Router();
var http = require('http');

// get-request for posts
router.get('/', function(req, res){
    let userId = req.query.userId;
    messagesURL = 'http://jsonplaceholder.typicode.com/posts?userId='+userId;

    http.request(messagesURL, function(response) {
        response.pipe(res);
    }).on('error', function(e) {
        res.sendStatus(500);
    }).end();
});

module.exports = router;