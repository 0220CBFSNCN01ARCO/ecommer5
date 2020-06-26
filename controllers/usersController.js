const fs = require("fs");
const bcrypt = require("bcrypt");
const { check, validationResult, body } = require("express-validator");
//let db = require("./database/models/index.js");

const usersController = {
  register: function (req, res) {
    res.render("register");
  },
  create: function(req, res) {

    let errors = validationResult(req);

    if(errors.isEmpty()){
      
      let usersJSON = fs.readFileSync("./data/users.json", {encoding: "utf-8"});
      let users;
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
        let usersJSON = fs.readFileSync('./data/users.json', {encoding: "utf-8"});
        let users;
        if (usersJSON == "") {
          users = [];
        } else {
          users = JSON.parse(usersJSON);
        }
        //console.log(users);
        let usuarioALoguearse;
        
        for (let i = 0; i < users.length; i++) {
          if(users[i].email == req.body.email) {
            if (bcrypt.compareSync(req.body.password, users[i].password)) {

              let usuarioALoguearse = users[i];
              console.log(usuarioALoguearse);
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
        res.redirect('account', {usuario: req.session.usuarioLogueado});

        if (req.body.recordame != undefined) {
          res.cookie('recordame',
          usuarioALoguearse.email, ({ maxAge: 60000 }))
        }

        res.send('Usuario Logueado');
    } else {
      return res.render('login', {errors: errors.errors});
    }

  },
  

  account : function (req, res) {
  
    res.render("account")
   
  }
};

module.exports = usersController;