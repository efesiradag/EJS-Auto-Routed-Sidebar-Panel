var express = require('express');
var router = express.Router();
var pages = require('../modules/pagesModule').pagesModule('views/pages')

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', {pages: pages});
});

module.exports = router;
