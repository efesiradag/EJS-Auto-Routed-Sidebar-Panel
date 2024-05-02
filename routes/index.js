var express = require('express');
var router = express.Router();
var pagesNames = require('../modules/pagesModule').pagesModule('views/pages')

/* GET home page. */
router.get('/:pageReq', function(req, res, next) {
  
  res.render('index', {pageName: pagesNames, page: req.params.pageReq+'.ejs'});
});

module.exports = router;
