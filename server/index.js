const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const { connectToDB, getDB } = require('./db');


const app = express();
const server = createServer(app);
const io = new Server(server, {
    connectionStateRecovery: {}
}); let db;


connectToDB( (err) => {
    if (!err) {
        server.listen(3000, () => {
            console.log('index listen 3000 port ...')
        });
        db = getDB();
    } else console.log(`DB connection error: ${err}`)
} )

const getUsersCollections = () => db.collection('users');
const getRecentChatsCollections = () => db.collection('recentChats');
const getGroupChatsCollections = () => db.collection('groupChats');



app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});






app.get('/users', (req, res) => {
    const users = [];
    getUsersCollections().find().forEach( (user) => { users.push(user) } ).then( () => {
        res.status(200).json(users);
    }).catch( (err) => { res.status(500).json({error: 'Proizoshel pizdec'}) } )
})
app.get('/group', (req, res) => {
    const users = [];
    getGroupChatsCollections().find().forEach( (user) => { users.push(user) } ).then( () => {
        res.status(200).json(users);
    }).catch( (err) => { res.status(500).json({error: 'Proizoshel pizdec'}) } )
})
app.get('/recent', (req, res) => {
    const users = [];
    getRecentChatsCollections().find().forEach( (user) => { users.push(user) } ).then( () => {
        res.status(200).json(users);
    }).catch( (err) => { res.status(500).json({error: 'Proizoshel pizdec'}) } )
})







io.on('connection', (socket) => {
    console.log('a user connect');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

