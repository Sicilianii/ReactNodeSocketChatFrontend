const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://admin:GIH%269zBS@lipascadmeb.beget.app/');
const app = express();
const server = createServer(app);
const io = new Server(server, {
    connectionStateRecovery: {}
});

const start = async () => {
    try {
        await client.connect();
        console.log('Connected');


        const DB = await client.db().collection('chat');
        const data = await DB.find();
        console.log(data)
    } catch (e) {
        console.log(e);
    }
}

start();


app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('a user connect');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3000, () => {
    console.log('index listen 3000 port ...')
});