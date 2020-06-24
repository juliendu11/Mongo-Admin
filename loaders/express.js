const ejs = require('ejs');
const routes = require('../routes');
const session = require('express-session');
const compression = require('compression');
const express = require('express');

const serverConfig = require('../config/server');

module.exports = ({app}) =>{
  app.set('view engine', 'ejs');

  app.use(session({ secret: serverConfig.expressSessionSecret, cookie: { maxAge: 10 * 60 * 1000 }}));
  app.use(compression());

  routes(app);

  app.listen(serverConfig.expressPort, function () {
    console.log(`Example app listening on port http://localhost:${serverConfig.expressPort}/ !`);
  });
};