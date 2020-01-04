var express = require('express');
var NoteControl = require('./control/NoteControl');
var app =express();

app.set('view engine','ejs');
app.use('/assets', express.static('assets'));

app.get('/',function(req,res){
  res.render('index');
});

app.get('/experience',function(req,res){
  res.render('experience');
});
app.get('/projects',function(req,res){
  res.render('projects');
});



app.get('/profile/:name',function(req,res){
  res.render('profile',{id: req.params.name});
});
NoteControl(app);


 
app.listen(3000);
