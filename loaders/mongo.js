const {MongoClient} = require('mongodb');

module.exports = async () =>{
    const username = process.env.DATABASE_USERNAME;
    const password = process.env.DATABASE_PASSWORD;
    const database = process.env.DATABASE_NAME;

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