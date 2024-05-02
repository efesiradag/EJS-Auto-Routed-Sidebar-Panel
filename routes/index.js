var express = require('express');
var router = express.Router();
var pagesNames = require('../modules/pagesModule').pagesModule('views/pages')

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', {pageName: pagesNames});
});

module.exports = router;
