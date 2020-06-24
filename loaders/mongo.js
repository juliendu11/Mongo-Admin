const {MongoClient} = require('mongodb');
const mongoDBConfig = require('../config/database')

module.exports = async () =>{
    const username = mongoDBConfig.USERNAME;
    const password = mongoDBConfig.PASSWORD;
    const database = mongoDBConfig.DATABASE;

    let uri = null;
    if (process.env.NODE_ENV === 'production'){
        uri = `mongodb://${username}:${password}@127.0.0.1:27017/${database}`;
    }
    else{
        uri = `mongodb://127.0.0.1:27017/${database}`;
    }

    const client = new MongoClient(uri);
    await client.connect();

    return client;
}