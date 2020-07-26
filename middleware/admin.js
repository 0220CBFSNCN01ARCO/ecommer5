const verifyAdmin = function(req, res, next){
    let usersAdmin = {
        nombre: "Yael Sucaria",
        email: "ya_sucaria@hotmail.com",
        password: "lemebel2512",
        avatar: "user-1594249373228.png"
    }
      if(req.body.email == usersAdmin.email && req.body.password == usersAdmin.password) {
          let usuarioLogueado = usersAdmin;
         res.render("profileAdmin", {usuarioLogueado});
            } 
        if(req.body.email == usersAdmin.email && req.body.password != usersAdmin.password){
            res.render("login", {errors: [{msg: "Contraseña incorrecta"}]})
        } else {
                next()
            }       
};


module.exports = {verifyAdmin}