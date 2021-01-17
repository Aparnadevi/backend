var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 let dataArray = [
      { id:1, name:'Anish', age: 32, education: 'MCA'},
      { id:2, name:'Beniel', age: 30, education: 'CA'},
      { id:3, name:'Cameo', age: 28, education: 'BE'},
      { id:4, name:'Daniel', age: 25, education: 'BA'},
      { id:5, name:'Ronald', age: 31, education: 'BTech'},
      { id:6, name:'Mitesh', age: 34, education: 'PUC'},
      { id:7, name:'Nimsha', age: 35, education: 'BCA'},
 ];
 res.json({
   data: dataArray
 });
});

module.exports = router;
