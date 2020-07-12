const validationAdmin = function(req, res, next){
    let usersAdmin = {
        nombre: "Yael Sucaria",
        email: "ya_sucaria@hotmail.com",
        avatar: "user-1594249373228.png"
    }

    if(req.session.usuarioLogueado != usersAdmin) {
        let mensajeAdmin = 'Esta pagina es sólo para administradores'
        res.render("stopAdmin", {mensajeAdmin: mensajeAdmin});
    } else {
        next();
    }
      
};


module.exports = {validationAdmin}