const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();

const port = 1234;


app.use(bodyParser.json());

app.use(express.static('src'));

app.get('/', function(req, res) {
    //res.send("This is home page")
    res.sendFile(path.join(__dirname, '/src/pages/index.html'))
})

app.get('/contact', function(req, res){
    res.sendFile(path.join(__dirname, '/src/pages/contact.html'))
})

app.get('/gallery', function(req, res){
    res.sendFile(path.join(__dirname, '/src/pages/gallery.html'))
})

app.get('/projects', function(req, res){
    res.sendFile(path.join(__dirname, '/src/pages/projects.html'))
})


app.listen(port, function () {
    console.log('Server running on http://localhost:' + port);
})