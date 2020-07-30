const db = require("../database/models");

const verifyAdmin = function(req, res, next){
    db.Usuario.findOne({
        where: {email : req.body.email}
      })
      .then(function(usuario){

        if (usuario.rol == 1 && req.body.email == usuario.email && req.body.password == usuario.password) {
            //  res.send("ok")
            req.session.usuarioLogueado = usuario
            console.log(usuario)
               res.redirect("/admin/profileAdmin")
    
            }else if(req.body.password != usuario.password){
                res.render("login", {errors: [{msg: "Contraseña incorrecta"}]})
           
           
            } else {
             
                    next()
              
                   
                } 
      })
         
};


module.exports = {verifyAdmin}