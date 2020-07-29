const fs = require("fs");
const bcrypt = require("bcrypt");
const { check, validationResult, body } = require("express-validator");
let path = require("path");
const db = require("../database/models");
const { query } = require("express");

const usersController = {
  register: function (req, res) {
    res.render("register");
  },
  create: function (req, res) {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Usuario.findOne({
        where: {
          email: req.body.email,
        },
      }).then(function (usuario) {
        if (usuario) {
          //res.send(usuario)
          res.render("register", { errors: [{ msg: "Usuario existente" }] });
        } else {
          console.log(req.body);
          db.Usuario.create({
            nombre: req.body.nombre,
            localidad: req.body.localidad,
            provincia: req.body.provincia,
            direccion: req.body.direccion,
            cp: req.body.cp,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.files[0].filename,
            rol: 0,
          })
            .then(() => {
              res.redirect("/");
            })
            .catch((err) => {
              console.log(err);
              return res.send(err);
            });
        }
      });
    } else {
      res.render("register", { errors: errors.errors });
    }
  },

  login: function (req, res) {
    res.render("login");
  },
  processLogin: function (req, res) {
    let errors = validationResult(req);

   // console.log(req.body)
    if (errors.isEmpty()) {
     let usuarioPorLoguearse = db.Usuario.findOne({
        where: { email: req.body.email },
      })

        .then(function (usuario) {
          //   if(!usuario){
          //   res.render("login",{errors: [{msg: "No tenemos registrado tu email"}]})
         // console.log(usuario)
          
          if (bcrypt.compare(req.body.password, usuario.password)) {
           
            req.session.usuarioLogueado = req.body.email
            req.session.usuarioLoginRol = usuario.rol
            console.log("session" + req.session.usuarioLoginRol)

            if(req.session.usuarioLoginRol == 1){
              res.redirect("/admin/profileAdmin")
            } else {
              res.redirect("/users/account");
            }

             
          } else {
            // console.log(errors.errors)
            res.render("login", { errors: [{ msg: "Clave incorrecta" }] });
          }
        })
        .catch(function (error) {
          res.render("login", { error });
        });
    } else {
      res.render("login", { errors: errors.errors });
    }
  },
  logout(req, res) {
    req.session.usuarioLogueado = null
    req.session.usuarioLoginRol = null
    //req.session.destroy((err) => {
      res.redirect("/login");
    //});
  },
  account: function (req, res) {
    db.Usuario.findOne({
      where: {
        email: req.session.usuarioLogueado,
      },
    }).then(function (data) {
      res.render("account", { data: data });
    });
  },
};

module.exports = usersController;
