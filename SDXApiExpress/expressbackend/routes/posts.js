var express = require('express');
var router = express.Router();

// post-request for posts
router.get('/', function(req, res, next){
    res.send('Some posts information');
});

module.exports = router;