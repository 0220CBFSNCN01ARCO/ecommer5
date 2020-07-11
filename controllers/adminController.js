const fs = require('fs');
const { check, validationResult, body } = require("express-validator");
const products = JSON.parse(fs.readFileSync("./data/detalleProductos.json", {encoding: "utf-8"}));
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
             
              
             // .then(function(libros){
                res.render('products', {
                  libros: libros          
                });

        },
        edit: function(req, res){
          db.Libro.findAll()
          .then(function(libros) {
              return res.render("productdetails2", {libros: libros})
            })
        },
        update: function(req, res){
          const idProducto = req.params.id;
                products.map( producto => {
                    if(producto.id == idProducto){
                      product.titulo= req.body.titulo,
                      product.autor= req.body.autor,
                    //  product.categoria= req.body.categoria,
                      product.precio= req.body.precio,
                      product.stock= req.body.stock,
                      product.avatar= req.files[0].filename
                    }
                })
                fs.appendFileSync("./data/detalleProductos.json", products);
                res.redirect('/products');
        },
        
        delete: function(req, res){
        db.Libro.destroy({
          where: {id: req.params.idLibro}
        })
        .then(function(result){
          let mensajeConfirm= "Se eliminó el producto correctamente"
          res.render("products", {mensajeConfirm: mensajeConfirm})
        })
          .catch(function(error){
            return res.render("products", {error: error})
          })
        }
        
        };

module.exports = adminController;