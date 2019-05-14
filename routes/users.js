var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
res.set('content-type', 'application/json');
res.json({firstName: 'Ian', lastName: 'Casper'});
});

module.exports = router;
