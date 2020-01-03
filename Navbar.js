var express =require('express');

var app= express();

app.get('/', function(req, res){
  res.send('this is gasdfasfreen');
});

app.get('/project',function(req, res){
  res.send('project');
});

app.get('/ass',function(req, res){
  res.send('project');
});
