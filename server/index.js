const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const http = require('http');
const socketio = require('socket.io');

mongoose.connect('mongodb://localhost:27017/mern-live', (err, db) => {
  if(err) throw err;
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../src')));

const server = http.createServer(app);
const io = socketio(server);

const routes = require('./routes/index')(io);
app.use('/', routes);

var port = 1993;

server.listen(port, function() {
   console.log('running at localhost: ' + port);
});