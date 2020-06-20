const fs = require("fs");
const bcrypt = require("bcrypt");
const { check, validationResult, body } = require("express-validator");

const usersController = {
  register: function (req, res) {
    res.render("register");
  },
  create: function(req, res, next) {

    let errors = validationResult(req);

    if(errors.isEmpty()){
      
      let usersJSON = fs.readFileSync("users.json", {encoding: "utf-8"});
      let usuarios;
      if (usersJSON == "") {
        users = [];
      } else {
      users = JSON.parse(usersJSON);
  
      }
      let user = {
        nombre: req.body.nombre,
        localidad: req.body.localidad,
        direccion: req.body.direccion,
        cp: req.body.cp,
        numero: req.body.numero,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.files[0].filename,
  
      }
  
      users.push(user);
  
      usersJSON = JSON.stringify(users);
  
      fs.appendFileSync("./data/users.json", usersJSON);
  
      res.redirect('/products');
    } else {
      res.render("register", {errors: errors.errors})
    }
  },

  login: function (req, res) {
    res.render("login");
  },
  processLogin: function(req, res) { 
    let errors = validationResult(req);
      if (errors.isEmpty()) {
        let usersJSON = fs.readFileSync('./data/users.json', {
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
        }
          if (usuarioALoguearse == undefined) {
          return res.render('login', {errors: [
            {msg: 'Credenciales invalidas'}
          ]});
        }

        req.session.usaruioLogueado = usuarioALoguearse;
        res.render('Estas logueado');

        if (req.body.recordame != undefined) {
          res.cookie('recordame'),
          usuarioALoguearse.email, ({ maxAge: 60000 })
        }

        res.send('Usuario Logueado');
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