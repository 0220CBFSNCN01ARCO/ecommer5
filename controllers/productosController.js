const fs = require('fs');
const { check, validationResult, body } = require("express-validator");
const products = JSON.parse(fs.readFileSync("./data/detalleProductos.json", {encoding: "utf-8"}));
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
 
 db.Libro.findByPk(req.params.idlibros)//, {
 // include: [{association: "categoria"}]
//})

  .then (function(libro) {
   //res.send(libro)
  res.render("productDetail", {libro: libro});
  })
  .catch(function(error){
    res.send(error)
  })
}


}
module.exports= productosController;