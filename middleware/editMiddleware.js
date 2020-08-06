const validationAdmin = function(req, res, next){
   
    if(req.session.usuarioLoginRol != 1) {
        console.log(req.session.usuarioLogueado)
        console.log(req.session.usuarioLoginRol)
        res.render("stopAdmin");
    } else {
        next();
    }
      
};


module.exports = {validationAdmin}