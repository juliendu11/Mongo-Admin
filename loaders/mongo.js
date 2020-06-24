const {MongoClient} = require('mongodb');
const mongoDBConfig = require('../config/database')


module.exports = async () =>{
    const username = mongoDBConfig.USERNAME;
    const password = mongoDBConfig.PASSWORD;
    const database = mongoDBConfig.DATABASE;
    const port = mongoDBConfig.PORT

    let uri = null;
    if (process.env.NODE_ENV === 'production'){
        uri = `mongodb://${username}:${password}@127.0.0.1:${port}/${database}`;
    }
    else{
        uri = `mongodb://127.0.0.1:${port}/${database}`;
    }

    const client = new MongoClient(uri);
    await client.connect();

    return client;
}