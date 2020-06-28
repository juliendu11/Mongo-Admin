const MongoService = require('../services/mongoService');
const cred  = require('../config/cred');

exports.Home = async (req, res) => {
  // const mongoServiceInstance = new MongoService(req.app.locals.mongoClient);
  // const databases = await mongoServiceInstance.getDatabases();
  res.renderVue("home.vue",{});
};

exports.LoginView = async(req,res)=>{
  res.render('pages/Login');
};

exports.Login = async(req,res)=>{
  if (req.body.password !== cred){
    return res.status(400).send({message: 'Bad password'});
  }
  else{
    req.session.logged = true;
    return res.status(200).send({message: ''});
  }
};

exports.Logout = async (req,res)=>{
  req.session.logged = false;
  res.redirect('/login');
};

exports.Database = async(req,res)=>{
  const dbName = req.params.dbname;


  const mongoServiceInstance = new MongoService(req.app.locals.mongoClient);
  const databases = await mongoServiceInstance.getDatabases();
  const databaseCollections = await mongoServiceInstance.getDatabasesCollections(dbName);
  res.render("pages/Database",{
    databases: databases.databases,
    collections:databaseCollections,
    name: dbName
  });
};

exports.Collection = async(req,res)=>{
  const dbName = req.params.dbname;
  const collectionName = req.params.collectionname;

  const path = `${dbName} / ${collectionName}`;

  const mongoServiceInstance = new MongoService(req.app.locals.mongoClient);
  const databases = await mongoServiceInstance.getDatabases();
  const documents = await mongoServiceInstance.getCollectionsDocuments(dbName,collectionName);

  res.render("pages/Collection",{
    databases: databases.databases,
    name: collectionName,
    documents,
    path
  });
};

exports.Document = async(req,res)=>{
  const dbName = req.params.dbname;
  const collectionName = req.params.collectionname;
  const documentId = req.params.id;

  // eslint-disable-next-line no-unused-vars
  const path = `${dbName} / ${collectionName} / ${documentId}`;

  res.render('pages/Document');
};
