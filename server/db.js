const { MongoClient } = require('mongodb');

const URL = 'mongodb://admin:GIH%269zBS@lipascadmeb.beget.app/';

let dbConnection;

module.exports = {
    connectToDB: (cb) => {
        MongoClient
            .connect(URL)
            .then( (client) => {
                console.log('Connect to MongoDB');
                dbConnection = client.db('chat');
                return cb();
            } )
            .catch( (err) => {
                return cb(err);
            })
    },
    getDB: () => dbConnection
}