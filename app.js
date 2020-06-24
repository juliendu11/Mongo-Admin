require('dotenv').config()
const express = require('express');
const loaders = require('./loaders')

async function startServer() {
    const app = express()
    app.use('/static', express.static('public'));
    
    const loaded =  await loaders({expressApp:app});

    app.locals.mongoClient = loaded.mongoClient;
}

startServer();
