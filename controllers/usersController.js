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
  create: function (req, res) {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Usuario.findOne({
        where: {
          email : req.body.email
         }
        })
        .then(function(usuario){
          if(usuario){
            //res.send(usuario)
            res.send("Usuario ya existente")
          } else {
            db.Usuario.create({
              nombre: req.body.nombre,
              localidad: req.body.localidad,
              provincia: req.body.provincia,
              direccion: req.body.direccion,
              cp: req.body.cp,
              email: req.body.email,
              password: bcrypt.hashSync(req.body.password, 10),
              avatar: req.files[0].filename
            })
            .then(
               res.render("account", { data: req.body })
              //res.send(usuario)
            )
          }
        });
      
      // .catch(function(error){
      //  res.redirect("register", {errors: errors})
      // })
      //return res.redirect("/")
      // }
    } else {
      res.render("register", {errors: errors.errors})
    }

  },

  login: function (req, res) {
    res.render("login");
  },
  processLogin: function (req, res) {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      db.Usuario.findOne({
        where: {
          email : req.body.email
         }
        })
        .then(function(usuario){
          if(!usuario){
            res.send("No tenemos registrado tu email")
          } else if(usuario.email == req.body.email && 
            bcrypt.compareSync(req.body.password, usuario.password)
        ){
          usuarioLogueado = usuario;
          res.render("account", {data: req.body});
        } 
      })

          
        } else {
      return res.render("login", { errors: errors.errors });
    }
  },
  logout(req, res, next) {
    req.session.destroy((err) => {
      res.redirect('/login')
    })
  },
  account: function(req, res) {
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
  }
};

module.exports = usersController;
