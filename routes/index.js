const { urlencoded } = require('body-parser');
let express = require('express');
let router = express.Router();
// let bodyParser = require("body-parser");

router.use(express.urlencoded());
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//about page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me' });
});

//projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

//services page
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

//contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/contact',function(req,res){
 //console.log(req.body.name);
 console.log(req.body.name);
 console.log(req.body.email);
 console.log(req.body.textarea)
 res.redirect("/");
  
})




module.exports = router;
