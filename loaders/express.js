const ejs = require('ejs');
const routes = require('../routes');
const session = require('express-session');
const compression = require('compression')
const express = require('express')

module.exports = ({app}) =>{
    app.set('view engine', 'ejs');

    app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 10 * 60 * 1000 }}))
    app.use(compression());

    routes(app)

    app.listen(3000, function () {
        console.log('Example app listening on port http://localhost:3000/ !')
    })
}