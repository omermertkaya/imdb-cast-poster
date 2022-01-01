var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var castdown = require('./castdown.js')
const Queue = require('bull');





// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});


app.post('/downloading', function(req,res){

    var alinanveriler = req.body.imdb_casts
    console.log(alinanveriler)
    castdown.castindir(alinanveriler)   
    res.redirect('/downloading');


    
})

app.get('/downloading', function(req,res){
  
  res.render('pages/downloading')
})






app.listen(8080);
console.log('Server is listening on port 8080');


