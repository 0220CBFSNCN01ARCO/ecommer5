const fs = require('fs');
const { check, validationResult, body } = require("express-validator");
const db = require("../database/models")


const productosController = {
listado : function(req, res){
    db.Libro.findAll()
    .then(function(libros) {
      return res.render("products", {
        libros: libros
    });
    })
    
    
},
detail: function(req, res) {

  db.Libro.findByPk(Number(req.params.idlibros))//, {
    // include: [{association: "categoria"}]
   //})
   
     .then (function(libro) {
       if(!libro) {
         return res.send('NO EXISTE LIBRO')
       }
     //res.send(libro)
     res.render("productDetail", {libro: libro});
     })
  
     .catch(function(error){
       res.send(error)
     })
   },
   category: function(req, res){

db.Categoria.findByPk(req.params.idcategoria)

.then(function(libros){
res.render("productsByCategory", {libros: libros})

})

   }
   
   
   }
   module.exports= productosController;
  