const fs = require('fs');
const bcrypt = require("bcrypt");
//let { check, validationResult, body } = require('express-validator');

const usersController = {

  register : function(req, res){
    res.render("register");
  },

    create: function (req, res) {
    //let errors = validationResult(req);

     // if (errors.isEmpty()) {

let usuario = {
nombre: req.body.nombre,
email: req.body.email,
password: bcrypt.hashSync(req.body.password, 10)
}


let archivoUsuarios = fs.readFileSync("./data/users.json", {encoding: "utf-8"});
let usuarios;
if(archivoUsuarios == " "){
   usuarios = [];
}else{
   usuarios = JSON.parse(archivoUsuarios);
}
usuarios.push(usuario);

let usuariosJSON = JSON.stringify(usuarios);
fs.appendFileSync("./data/users.json", usuariosJSON); 

        res.redirect('/users/register');
      //} else {
        //return res.redirect('/users/register'), ({errors: errors.errors})
   //   }

    },
    login : function(req, res){
      res.render("login");
  },
    count: function(req, res){
      let archivoUsuarios = fs.readFileSync("./data/users.json", {encoding: "utf-8"});
      let usuarios;
      if(archivoUsuarios == ""){
         usuarios = [];
      }else{
         usuarios = JSON.parse(archivoUsuarios);
      }
      for(let i = 0; i < usuarios.length; i++){
        if(req.body.email == usuarios[i].email && bcrypt.compareSync(req.body.password, usuarios[i].password)){
          res.render("count")
        } else {
          res.redirect("/users/login");
        }
      }
    }
};

module.exports = usersController;