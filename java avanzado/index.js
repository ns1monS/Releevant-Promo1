const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/productos', function(req, res) {
    let productos = [5, 6, 7, 8];

    res.send(productos);
});

app.listen(8080);