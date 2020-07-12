const verifyAdmin = function(req, res, next){
    let usersAdmin = {
        nombre: "Yael Sucaria",
        email: "ya_sucaria@hotmail.com",
        avatar: "user-1594249373228.png"
    }
   let usuarioLogueado;
      if(req.body.email == usersAdmin.email) {
          let usuarioLogueado = usersAdmin;
         res.render("profileAdmin", {usuarioLogueado});
            } else {
                next()
            }       
};

module.exports = {verifyAdmin}