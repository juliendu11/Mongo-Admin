const { json } = require("express");

const MongoService = require('../services/mongoService');

exports.Home = async (req, res) => {
  const mongoServiceInstance = new MongoService(req.app.locals.mongoClient)
  const databases = await mongoServiceInstance.getDatabases();
  res.render("pages/Home", {
    databases: databases.databases,
  });
};

exports.Login = async(req,res)=>{
    res.render('pages/Login')
}

exports.Database = async(req,res)=>{
  const dbName = req.params.dbname;


  const mongoServiceInstance = new MongoService(req.app.locals.mongoClient)
  const databases = await mongoServiceInstance.getDatabases();
  const databaseCollections = await mongoServiceInstance.getDatabasesCollections(dbName)
  res.render("pages/Database",{
    databases: databases.databases,
    collections:databaseCollections,
    name: dbName
  });
}

exports.Collection = async(req,res)=>{
  const dbName = req.params.dbname;
  const collectionName = req.params.collectionname;

  const path = `${dbName}/${collectionName}`;

  const mongoServiceInstance = new MongoService(req.app.locals.mongoClient)
  const databases = await mongoServiceInstance.getDatabases();
  const documents = await mongoServiceInstance.getCollectionsDocuments(dbName,collectionName)

  res.render("pages/Collection",{
    databases: databases.databases,
    name: collectionName,
    documents,
    path
  });
}

exports.Document = async(req,res)=>{
  const dbName = req.params.dbname;
  const collectionName = req.params.collectionname;
  const documentId = req.params.id;

  const path = `${dbName}/${collectionName}/${documentId}`;

  res.render('pages/Document');
}
