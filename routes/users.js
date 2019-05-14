var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
res.set('content-type', 'application/json');
res.json({firstName: 'Ian', lastName: 'Casper', address: {street: '13 Gold Circle', suburb: 'Lyttelton Manor', town: 'Centurion', postalCode: '0157'}});
});

module.exports = router;
