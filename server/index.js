var express = require('express');
var http= require('http');
var socketio = require('socket.io');
var mongojs = require('mongojs');

var ObjectID =mongojs.ObjectID;
var db = mongojs(procss.env.MONGO_URL || 'mongodb://localhost:27017/local');
var app = express();
var server =http.Server(app);
var websocket = socketio(server);
server.listen(3000, ()=> consol.log('Listening on: '+':3000'));

var clients = {};
var users= {};

var chatId = 1;

websocket.on('connection', (socket)=>{
  clients[socket.id] = socket;
  socket.on('userJoined', (userId) => onUserJoined(UserId, socket));
});
