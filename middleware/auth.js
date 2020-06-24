module.exports = function(req, res, next) { 
    if (!req.session.account){
         res.redirect('/login');
    }   else{
        next();
    }
};