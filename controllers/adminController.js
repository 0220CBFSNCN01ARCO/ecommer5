const fs = require('fs');
const { check, validationResult, body } = require("express-validator");
const db = require("../database/models")

const adminController = {
  profileAdmin : function(req, res){

    db.Usuario.findOne({
      where: {
        email: req.session.usuarioLogueado,
      },
    }).then(function (usuario) {
res.render("profileAdmin", {usuario: usuario})
})
  },
    adminProducts : function(req, res){
      db.Categoria.findAll()
    .then(function(categoria){
      return res.render("createProduct", {
        categoria: categoria
    });
    })
           
    },
    
    create: function(req, res){ 
            let errors = validationResult(req);
      
            if(errors.isEmpty()){

          
            db.Libro.create({
                titulo: req.body.titulo,
                autor: req.body.autor,
                categoria: req.body.categoria,
                precio: req.body.precio,
                stock: req.body.stock,
                descripcion: req.body.descripcion,
                portada: req.files[0].filename
              }) 

             
             .then(function(){
              db.Libro.findAll()
              .then(function(libros){
                return res.render("products", {libros: libros})
              })
             })
             .catch(function(error){
              res.render("profileAdmin", {error})
            })
             
          } else {
            res.render("createProduct", {errors: errors.errors})
          }  

        },
        edit: function(req, res){
          db.Libro.findAll()
          .then(function(libros){
              return res.render("editProduct", {libros: libros})
            })
            .catch(function(error){
              res.send(error)
            })
        },
        select: function(req, res){
  
            db.Libro.findByPk(req.params.idlibros)
            .then(function(libro){
              return res.render("updateProduct", {libro: libro})
            })
              //res.send(libro)
              
           
        },
        update: function(req, res){
         db.Libro.update({
            titulo: req.body.titulo,
            autor: req.body.autor,
            precio: req.body.precio,
            stock: req.body.stock,
            descripcion: req.body.descripcion,
            portada: req.files[0].filename
          }, { where: {
              idlibros: req.params.idlibros
          }
        })
          .then(function(){
            db.Libro.findAll()
            .then(function(libros){
              return res.render("editProduct", {libros: libros})
            })
          })
          
        },
        
        delete: function(req, res){
        db.Libro.destroy({
          where: {
            idlibros: req.params.idlibros
          }
          
        })
        
        .then(
         res.redirect("/admin/edit")
         
         )
          
        
        }
      }

module.exports = adminController;