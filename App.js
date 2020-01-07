var express = require('express');
var NoteControl = require('./control/NoteControl');
var app =express();
var path = require('path');

//allows us to use ejs files
//ejs files makes it easier to organize
app.set('view engine','ejs');
//tells js where the css folders
app.use('/assets', express.static('assets'));
//tells js where the website files are
app.set('views', [path.join(__dirname,'views' ,'notes'),path.join(__dirname,'views')]);

//the home pages
app.get('/',function(req,res){
  res.render('index');
});

app.get('/Equations',function(req,res){
  res.render('Equations');
});
//
app.get('/projects',function(req,res){
  res.render('projects');
});


app.get('/MATH1104',function(req,res){
  res.render('MATH1104');
});

app.get('/COMP1406',function(req,res){
  res.render('COMP1406');
});
app.get('/COMP2804',function(req,res){
  res.render('COMP2804');
});

app.get('/STAT2507',function(req,res){
  res.render('STAT2507');
});
app.get('/PYSC1001',function(req,res){
  res.render('PYSC1001');
});


//not useful rn
app.get('/profile/:name',function(req,res){
  res.render('profile',{id: req.params.name});
});
NoteControl(app);


//localhost(number)
app.listen(3000);
