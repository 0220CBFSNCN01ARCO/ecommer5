const fs = require('fs');
const { check, validationResult, body } = require("express-validator");
const db = require("../database/models")


const productosController = {
listado : function(req, res){
    db.Libro.findAll()
    .then(function(libros) {
  //    res.send(libros)
      return res.render("products", {libros: libros});
    })
    
},
detail: function(req, res) {

  db.Libro.findbyPk(req.params.idlibro,
    {include: [{association: "categoria"}]})
    .then (function(libro) {
     res.render("productDetail", {libros: libro});
     })
    }
   }
   module.exports= productosController;