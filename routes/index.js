const baseController = require('../controllers/baseController');

const authMiddleware= require('../middleware/auth')

module.exports = (app) =>{
    app.get('/', baseController.Home) 
    app.get('/:dbname', baseController.Database) 
    app.get('/:dbname/:collectionname', baseController.Collection) 
    app.get('/:dbname/:collectionname/:id', baseController.Document) 
    
    app.get('/login',  baseController.Login) 
}