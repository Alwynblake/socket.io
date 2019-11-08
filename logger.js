'use strict';

const io = require('socket.io-client');

const client = io.connect('http://localhost:3001/school');

client.on('file-saved', (payload) => {
  console.log('saved', payload);
});

client.on('file-error', (payload) => {
  console.log('error', payload);
});