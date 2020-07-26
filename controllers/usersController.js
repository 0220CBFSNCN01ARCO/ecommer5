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
              res.redirect("/")

            }).catch((err) => {
              console.log(err);
              return res.send(err)
            })
       
     
               
            
          }
        });
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

      .then(function(usuario){

       console.log(usuario)
       if(!usuario){
         res.render("login",{errors: [{msg: "No tenemos registrado tu email"}]})
        
       } else if (usuario &&
      bcrypt.compareSync(req.body.password, usuario.password)){

      
      req.session.usuarioLogueado = usuario
       return res.redirect("/users/account")
    //  console.log(req.session.usuarioLogueado)
     // delete req.session.user.password;
     // if(req.session.user && req.session.user.role == 'admin') {
      //  next()
     // }
  
    

       } else if(usuario &&
        !bcrypt.compareSync(req.body.password, usuario.password)){
         console.log(errors.errors)
         res.render("login", {errors: [{msg: "Clave incorrecta"}]})
       } 
      })

      .catch(function(error){
        res.render("login", {error})
      })

      
        let usersAdmin = {
        nombre: "Yael Sucaria",
        email: "ya_sucaria@hotmail.com",
        password: "lemebel2512",
        avatar: "user-1594249373228.png"
    }
      if(req.body.email == usersAdmin.email && req.body.password == usersAdmin.password) {
          let usuarioLogueado = usersAdmin;
         res.render("profileAdmin", {usuarioLogueado});
            } 
        if(req.body.email == usersAdmin.email && req.body.password != usersAdmin.password){
            res.render("login", {errors: [{msg: "Contraseña incorrecta"}]})
        } 


      

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
       email: req.session.usuarioLogueado.email
     }
     
   })
   .then(function(usuario){
    res.render("account", {data: req.session.usuarioLogueado});
    
  })
  }
};

module.exports = usersController;