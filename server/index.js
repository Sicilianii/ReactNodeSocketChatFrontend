const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const userRouter = require('./routes/user-routes')

const app = express();
app.use(express.json());
app.use(userRouter);


const server = createServer(app);
const io = new Server(server, {
    connectionStateRecovery: {}
});

const URL = 'mongodb://admin:GIH%269zBS@lipascadmeb.beget.app/';
mongoose.connect(URL)
    .then( () => { console.log(`Connected to MongoDB`) } )
    .catch( (err) => { console.log(`DB connection error ${err}`) })

server.listen(3000, () => {
    console.log('index listen 3000 port ...')
});


app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});



io.on('connection', (socket) => {
    console.log('a user connect');

    socket.on('chat message', (msg) => {
        console.log(msg)
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

