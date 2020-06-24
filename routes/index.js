const baseController = require('../controllers/baseController');

const authMiddleware= require('../middleware/auth')

module.exports = (app) =>{
    app.get('/', baseController.Home) 
    
    app.get('/login',  baseController.Login) 
}