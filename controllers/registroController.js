const fs = require('fs');

const registroController = {
  register : function(req, res){
    res.render("users")
  },
    create: function (req, res) {
let usuario = {
nombre: req.body.nombre,
email: req.body.email,
password: req.body.password
}
let archivoUsuarios = fs.readFileSync("users.json", {encoding: "utf-8"});
let usuarios;
if(archivoUsuarios == ""){
   usuarios = [];
}else{
   usuarios = JSON.parse(archivoUsuarios);
}
usuarios.push(usuario);

let usuarioJSON = JSON.stringify(usuarios);
fs.appendFileSync("users.json", usuariosJSON);

        res.redirect('users', {title: "Gracias por registrarte en Mercado Libro"});
      }
}


module.exports = registroController;