const fs = require('fs');
const { check, validationResult, body } = require("express-validator");
const db = require("../database/models")

const adminController = {
  profileAdmin : function(req, res){

    db.Usuario.findOne({
      where: {
        email: req.session.usuarioLogueado.email,
      },
    }).then(function (data) {
res.render("account", {data: data})
})
  },
    adminProducts : function(req, res){
      db.Categoria.findAll(
        {
          include: [{association: "libros"}]
        }
      )
    .then(function(categoria){
      return res.render("createProduct", {
        categoria: categoria,
        data: req.session.usuarioLogueado
    });
    })
           
    },
    
    create: function(req, res){ 
            let errors = validationResult(req);
      
            if(errors.isEmpty()){

          
            db.Libro.create({
                titulo: req.body.titulo,
                autor: req.body.autor,
                idcategorias: Number(req.body.categoria),
                precio: req.body.precio,
                stock: req.body.stock,
                descripcion: req.body.descripcion,
                portada: req.files[0].filename
              }) 

             
             .then(function(){
              db.Libro.findAll()
              .then(function(libros){
               // res.send(req.body)
               return res.render("products", {libros: libros,
                data: req.session.usuarioLogueado})
              })
             })
             .catch(function(error){
              res.render("account", {error})
            })
             
          } else {
            res.render("createProduct", {errors: errors.errors,
              data: req.session.usuarioLogueado})
          }  

        },
        edit: function(req, res){
          db.Libro.findAll(
            {
              include: [{association: "categoria"}]
            }
          )
          .then(function(libros){
              return res.render("editProduct", {libros: libros,
                data: req.session.usuarioLogueado})
            })

            
            .catch(function(error){
              res.send(error)
            })
        },
        select: function(req, res){
  
            db.Libro.findByPk(req.params.idlibros)
            .then(function(libro){

              db.Categoria.findAll()
              .then(function(categoria){
                return res.render("updateProduct", {
                libro: libro,
                categoria: categoria,
                data: req.session.usuarioLogueado})
              })
             
            })
            .catch(function(error){
              res.send(error)
            })
        //    let categoria = db.Categoria.findAll()
          //  let libroSeleccionado = db.Libro.findByPk(req.params.idlibros)
        //    Promise.all([categoria, libroSeleccionado])
              //res.send(libro)
        },
        update: function(req, res){

         db.Libro.update({
            titulo: req.body.titulo,
            autor: req.body.autor,
            idcategorias: Number(req.body.categoria),
            precio: req.body.precio,
            stock: req.body.stock,
            descripcion: req.body.descripcion,
            portada: req.files[0].filename,
          }, { where: {
              idlibros: req.params.idlibros
          }
        })
          .then( res.redirect("/admin/edit") )

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