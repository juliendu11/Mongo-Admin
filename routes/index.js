const baseController = require('../controllers/baseController');

const authMiddleware= require('../middleware/auth');

module.exports = (app) =>{
  app.get('/login',  baseController.LoginView); 
  app.get('/logout',  baseController.Logout); 
  app.post('/login',  baseController.Login); 

  app.get('/',authMiddleware, baseController.Home); 
  app.get('/:dbname',authMiddleware, baseController.Database); 
  app.get('/:dbname/:collectionname',authMiddleware, baseController.Collection); 
  app.get('/:dbname/:collectionname/:id',authMiddleware, baseController.Document); 
    
};