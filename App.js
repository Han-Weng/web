var express = require('express');
var NoteControl = require('./control/NoteControl');
var app =express();
var path = require('path');


app.set('view engine','ejs');
app.use('/assets', express.static('assets'));
app.set('views', [path.join(__dirname,'views' ,'notes'),path.join(__dirname,'views')]);


app.get('/',function(req,res){
  res.render('index');
});

app.get('/experience',function(req,res){
  res.render('experience');
});
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

app.get('/profile/:name',function(req,res){
  res.render('profile',{id: req.params.name});
});
NoteControl(app);



app.listen(3000);
