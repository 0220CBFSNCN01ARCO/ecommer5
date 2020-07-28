const validationAdmin = function(req, res, next){
   
    if(req.session.usuarioLogueado.rol == null) {
        res.render("stopAdmin");
    } else {
        next();
    }
      
};


module.exports = {validationAdmin}