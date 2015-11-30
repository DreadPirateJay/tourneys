var express = require('express');
var router = express.Router();

var users = [
  { username: 'test', password: '12345' },
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).jsonp(req.query);
});

module.exports = router;
