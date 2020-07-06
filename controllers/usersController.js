const fs = require("fs");
const bcrypt = require("bcrypt");
const { check, validationResult, body } = require("express-validator");
let path = require("path");
const db = require("../database/models");
//const rutaDb = path.join("..", "database", "models", "index");
//const db = require(rutaDb)


const usersController = {
  register: function (req, res) {
    res.render("register");
  },
  create: function(req, res) {

    let errors = validationResult(req);

    if(errors.isEmpty()){
      
      //let usersJSON = fs.readFileSync("./data/users.json", {encoding: "utf-8"});
      //let users;
      //if (usersJSON == "") {
       // users = [];
     // } else {
     // users = JSON.parse(usersJSON);
  
     // }
     let nuevoUsuario= db.Usuario.create({
        nombre: req.body.nombre,
        localidad: req.body.localidad,
        direccion: req.body.direccion,
        cp: req.body.cp,
        numero: req.body.numero,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.files[0].filename
      })
       .then(function(resultado){
        res.render('account', {nuevoUsuario: nuevoUsuario});
      })
      .catch(function(error){
        res.redirect("register", {errors: errors})
      })
  
      }
  
     // users.push(user);
  
      //usersJSON = JSON.stringify(users);
  
      //fs.appendFileSync("./data/users.json", usersJSON);
  
      //res.redirect('/products');
   // } else {
     // res.render("register", {errors: errors.errors})
   // }
  },

  login: function (req, res) {
    res.render("login");
  },
  processLogin: function(req, res) { 
    let errors = validationResult(req);
      if (errors.isEmpty()) {
        let usersJSON = fs.readFileSync("./data/users.json", {encoding: "utf-8"});
        let users;
        if (usersJSON == "") {
          users = [];
        } else {
          users = JSON.parse(usersJSON);
        }
        let usuarioALoguearse; // esto estaba comentado
        for (let i = 0; i < users.length; i++) {
          if(users[i].email == req.body.email) {
            if (bcrypt.compareSync(req.body.password, users[i].password)) {
             usuarioALoguearse = users[i]; //esto estaba comentado

            
             // console.log(usuarioALoguearse);
              break;
            }
          }
        }
          if (usuarioALoguearse == undefined) {
          return res.render('login', {errors: [
            {msg: 'Credenciales inválidas'}
          ]});
        }

        req.session.usuarioLogueado = usuarioALoguearse;
        res.send('Estas logueado');

        if (req.body.recordame != undefined) {
          res.cookie('recordame',
          usuarioALoguearse.email, ({ maxAge: 60000 }))
        }

        res.render('account', {usuarioLogueado});
    } else {
      return res.render('login', {errors: errors.errors});
    }

  },

  
  account: function (req, res) {
    let archivoUsuarios = fs.readFileSync("./data/users.json", {
      encoding: "utf-8",
    });
    let usuarios;
    if (archivoUsuarios == "") {
      usuarios = [];
    } else {
      usuarios = JSON.parse(archivoUsuarios);
    }
    for (let i = 0; i < usuarios.length; i++) {
      if (
        req.body.email == usuarios[i].email &&
        bcrypt.compareSync(req.body.password, usuarios[i].password)
      ) {
        res.redirect("account");
      } else {
        res.redirect("/users/login");
      }
    }
  },
  admin: function(req, res){
    return res.send("Bienvenido " + req.nombreAdmin);
  }
};

module.exports = usersController;