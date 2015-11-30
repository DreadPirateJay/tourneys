var express = require('express');
var router = express.Router();

router.get('/post.json', function (req, res, next) {
  var action = req.query.action;

  res.set('Access-Control-Allow-Origin', '*');

  if (action === 'user_login') {
    if (req.query.username === 'test' && req.query.password === '12345') {
      res.status(200).jsonp({ code: 1, status: 200, message: 'OK' });
    } else {
      res.status(403).jsonp({ code: 0, status: 403, message: 'Forbidden' });
    }
  } else {
    res.status(501).jsonp({ status: 501, message: 'Not Implemented'});
  }
});

module.exports = router;