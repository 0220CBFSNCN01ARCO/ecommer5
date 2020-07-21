const fs = require('fs');
const { check, validationResult, body } = require("express-validator");
const db = require("../database/models")

const adminController = {
    adminProducts : function(req, res){
           res.render('createProduct')
    },
    
    create: function(req, res){ 
            //let errors = validationResult(req);
      
           // if(errors.isEmpty()){

             var libros = db.Libro.findAll()
             .then(function(libros){
            db.Libro.create({
                titulo: req.body.titulo,
                autor: req.body.autor,
               // categoria: req.body.categoria,
                precio: req.body.precio,
                stock: req.body.stock,
                descripcion: req.body.descripcion,
                portada: req.files[0].filename
              }) 

             })
             
              
             //.then(function(libros){
                res.render('products', {libros: libros});

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
            portada: req.body.filename
          }, { where: {
              idlibros: req.params.idlibros
          }
        })
          res.render("editProduct")
          
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