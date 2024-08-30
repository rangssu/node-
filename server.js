const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('success to 8080')
});

app.get('/pet', function(req, res){
    res.send('pet pet pet pet 노드 첫걸음임.')
});

app.get('/beauty', function(req, res){
    res.send('뷰티로 들어왔슴니다.')
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});

app.get('/main', function(req, res){
    res.sendFile(__dirname + '/main.html')
    console.log('메인 페이지 진입.')
});