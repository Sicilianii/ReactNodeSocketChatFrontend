const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const { ObjectId } = require("mongodb");
const mongoose = require('mongoose');
const User = require('./models/users');

const app = express();
app.use(express.json());
const server = createServer(app);
const io = new Server(server, {
    connectionStateRecovery: {}
}); let db;

const URL = 'mongodb://admin:GIH%269zBS@lipascadmeb.beget.app/';
mongoose.connect(URL)
    .then( () => { console.log(`Connected to MongoDB`) } )
    .catch( (err) => { console.log(`DB connection error ${err}`) })

server.listen(3000, () => {
    console.log('index listen 3000 port ...')
});

const handleError = (res, err) => { res.status(500).json( {error: `${err}`} )}




app.get('/users', (req, res) => {
    User.find().then( (user) => {
        res.status(200).json(user);
    }).catch( (err) => handleError(res, 'Vse Ploho') )
});


// app.get('/users/:id', (req, res) => {
//     if (ObjectId.isValid(req.params.id)) {
//         getUsersCollections().findOne( { _id: new ObjectId(req.params.id) } ).then( (user) => {
//             res.status(200).json(user);
//         }).catch( (err) => { res.status(500).json({error: 'Proizoshel pizdec'}) } )
//     } else { handleError(res, 'Vse Ploho') }
// });
//
// app.patch('/users/:id', (req, res) => {
//     if (ObjectId.isValid(req.params.id)) {
//         getUsersCollections().updateOne( { _id: new ObjectId(req.params.id) }, { $set: req.body } ).then( (result) => {
//             res.status(200).json(result);
//         }).catch( (err) => { res.status(500).json({error: 'Proizoshel pizdec'}) } )
//     } else { handleError(res, 'Vse Ploho') }
// });
//
// app.post('/users', (req, res) => {
//     if (ObjectId.isValid(req.params.id)) {
//         getUsersCollections().insertOne( req.body ).then( (result) => {
//             res.status(200).json(result);
//         }).catch( (err) => handleError(res, 'Vse Ploho') )
//     } else {res.status(500).json({error: 'Proizoshel pizdec'})}
// });
//
// app.delete('/users/:id', (req, res) => {
//     if (ObjectId.isValid(req.params.id)) {
//         getUsersCollections().deleteOne( { _id: new ObjectId(req.params.id) } ).then( (result) => {
//             res.status(200).json(result);
//         }).catch( (err) => { res.status(500).json({error: 'Proizoshel pizdec'}) } )
//     } else { handleError(res, 'Vse Ploho') }
// });








//
// app.get('/group', (req, res) => {
//     const users = [];
//     getGroupChatsCollections().find().forEach( (user) => { users.push(user) } ).then( () => {
//         res.status(200).json(users);
//     }).catch( (err) => handleError(res, 'Vse Ploho') )
// })
// app.get('/recent', (req, res) => {
//     const users = [];
//     getRecentChatsCollections().find().forEach( (user) => { users.push(user) } ).then( () => {
//         res.status(200).json(users);
//     }).catch( (err) => handleError(res, 'Vse Ploho') )
// })





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

