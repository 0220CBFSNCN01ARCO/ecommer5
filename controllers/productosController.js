
const { check, validationResult, body } = require("express-validator");
const db = require("../database/models")


const productosController = {
 
listado : function(req, res){
    db.Libro.findAll({
      include: [{association: "categoria"}]
    })
    .then(function(libros) {
      return res.render("products", {
        libros: libros,
        data: req.session.usuarioLogueado
    });
    })
    
    
},
detail: function(req, res) {

  db.Libro.findByPk(Number(req.params.idlibros))//, {
    // include: [{association: "categoria"}]
   //})
   
     .then (function(libro) {
       if(!libro) {
         return res.send('NO EXISTE ESE LIBRO')
       }
     //res.send(libro)
     res.render("productDetail", {
       libro: libro,
      data: req.session.usuarioLogueado});
     })
  
     .catch(function(error){
       res.send(error)
     })
   },
   category: function(req, res){

db.Libro.findAll({
  where:{
    idcategorias: req.params.idcategorias
  }
})


.then(function(libros){
  let categoria = db.Categoria.findByPk(req.params.idcategorias)
  .then(function(categoria){
    res.render("productsByCategory", {
      libros: libros,
      categoria: categoria,
      data: req.session.usuarioLogueado})
  })
})

   }
   
   
   }
   module.exports= productosController;
  