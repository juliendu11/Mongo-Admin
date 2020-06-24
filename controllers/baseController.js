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
