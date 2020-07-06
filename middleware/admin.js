const verifyAdmin = function(req, res, next){
    let usersAdmin = {
        nombre: "Yael Sucaria",
        email: "ya_sucaria@hotmail.com"
    }
   let userAdminLogueado;
      if(req.body.email == usersAdmin.email) {
          let userAdminLogueado = usersAdmin;
         res.render("profileAdmin", {userAdminLogueado});
            } else {
                next()
            }       
};

module.exports = {verifyAdmin}