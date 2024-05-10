'use strict';

var express = require('express');
var app = express();
var Server = require('http').Server;
var server = new Server(app);

server.listen(2345);

console.info('Server listening at http://localhost:2345/');

// __dirname is used here along with package.json.pkg.assets
// see https://github.com/zeit/pkg#config and
// https://github.com/zeit/pkg#snapshot-filesystem
app.use('/', express.static(__dirname + '/views'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
