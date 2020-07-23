const fs = require("fs");
const bcrypt = require("bcrypt");
const { check, validationResult, body } = require("express-validator");
let path = require("path");
const db = require("../database/models");


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
            res.render("register", {errors: [{msg: "Usuario existente"}]})
          } else {
            console.log(req.body)
           db.Usuario.create({
              nombre: req.body.nombre,
              localidad: req.body.localidad,
              provincia: req.body.provincia,
              direccion: req.body.direccion,
              cp: req.body.cp,
              email: req.body.email,
              password: bcrypt.hashSync(req.body.password, 10),
              avatar: req.files[0].filename
            }).then(() => {
              res.redirect("/users/account")

            }).catch((err) => {
              console.log(err);
              return res.send(err)
            })
       
     
              //res.send(usuario)
            
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

    console.log(req.body)
    if (errors.isEmpty()) {

      db.Usuario.findOne({
        where: {email : req.body.email}
      })
      .then(function(query){
        console.log(query)
       if(!query){
         res.render("login",{errors: [{msg: "No tenemos registrado tu email"}]})

       } else if (query &&
      bcrypt.compareSync(req.body.password, query.password)){
      req.session.user = query
      console.log(req.session.user);
      res.redirect("/users/account")

       } else {
         console.log(errors.errors)
         res.render("login", {errors: [{msg: "Clave incorrecta"}]})
       }
      })

        .catch(function(error){
          res.render("login", {error})
        })

      } else {
        res.render("login", {errors: errors.errors})
      }
  },
  logout(req, res, next) {
    req.session.destroy((err) => {
      res.redirect('/login')
    })
  },
  account: function(req, res) {
   db.Usuario.findOne({
     where: {
       email: req.session.user.email
     }
     
   })
   .then(function(usuario){
    res.render("account", {data: usuario});
    
  })
  }
};

module.exports = usersController;