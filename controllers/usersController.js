const fs = require("fs");
const bcrypt = require("bcrypt");
let { check, validationResult, body } = require("express-validator");

const usersController = {
  register: function (req, res) {
    res.render("register");
  },
  create: function(req, res, next) {
    let usuario = {
      nombre: req.body.nombre,
      localidad: req.body.localidad,
      direccion: req.body.direccion,
      cp: req.body.cp,
      numero: req.body.numero,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      avatar: req.files[0].filename,

    }

    let archivoUsuarios = fs.readFileSync("./data/users.json", {encoding: "utf-8"});
    let usuarios;
    if (archivoUsuarios == "") {
      usuarios = [];
    } else {
    usuarios = JSON.parse(archivoUsuarios);

    }

    usuarios.push(usuario);

    usuariosJSON = JSON.stringify(usuarios);

    fs.appendFileSync("./data/users.json", usuariosJSON);

    res.redirect('/products');

  },
  /*create: function (req, res, next) {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let usuario = {
        nombre: req.body.nombre,
        email: req.body.email,
        direccion: req.body.direccion,
        cp: req.body.cp,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.files[0].filename,
      };


      let archivoUsuarios = fs.readFileSync("./data/users.json", {
        encoding: "utf-8",
      });
      let usuarios;
      if (archivoUsuarios == "") {
        usuarios = [];
      } else {
        usuarios = JSON.parse(archivoUsuarios);
      }
      usuarios.push(usuario);

      let usuariosJSON = JSON.stringify(usuarios);
      fs.appendFileSync("./data/users.json", usuariosJSON);

       res.redirect('/users/register');
    } else {
      return res.redirect("/users/register"), { errors: errors.errors };
    }
  },*/

  login: function (req, res) {
    res.render("login");
  },
  processLogin: function(req, res) { 
    let errors = validationResult(req);
      if (errors.isEmpty()) {
        let usersJSON = fs.readFileSync('users.json', {
          encoding: "utf-8",
        });
        let usuarios;
        if (usersJSON == " ") {
          usuarios = [];
        } else {
          usuarios = JSON.parse(usersJSON);
        }

        for (let i = 0; i < usersJSON.length; i++) {
          if(usuarios[i].email == req.body.email) {
            if (bcrypt.compareSync(req.body.password), usuarios[i].password) {
              let usuarioALoguearse = usuarios[i];

              break;
            }
          }
        } if (usuarioALoguearse == undefined) {
          return res.render('login', {errors: [
            {msg: 'Credenciales invalidas'}
          ]});
        }

        req.session.usaruioLogueado = usuarioALoguearse;

        if (req.body.recordame != undefined) {
          res.cookie('recordame'),
          usuarioALoguearse.email, ({ maxAge: 60000 })
        }

        res.render('Usuario Logueado');
    } else {
      return res.render('login', {errors: errors.errors});
    }

  }, 

  count: function (req, res) {
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
        res.render("count");
      } else {
        res.redirect("/users/login");
      }
    }
  },
};

module.exports = usersController;