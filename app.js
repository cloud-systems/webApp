const express = require('express');
const fs = require('fs')
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();

const port = 1234;


app.use(bodyParser.json());

app.use(express.static('src/public'));

app.get('/', (req, res) => {
    res.contentType('html')
    res.send(fs.readFileSync(__dirname + '/src/pages/index.html'))
})

app.get('/*', (req, res) => {
    const suffix = (req.params['0'].includes('.')) ? '' : '.html'
    const path = __dirname + '/src/pages/' + req.params['0'] + suffix
    res.contentType('html')
    res.send(fs.readFileSync(path))
})


app.listen(port, function () {
    console.log('Server running on http://localhost:' + port);
})