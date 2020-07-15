const validationAdmin = function(req, res, next){
    let usersAdmin = {
        nombre: "Yael Sucaria",
        email: "ya_sucaria@hotmail.com",
        avatar: "user-1594249373228.png"
    }
let usuarioLogueado;
    if(req.session.usuarioLogueado == undefined || req.session.usuarioLogueado.email != usersAdmin.email) {
        res.render("stopAdmin");
    } else {
        next();
    }
      
};


module.exports = {validationAdmin}