
const { check, validationResult, body } = require("express-validator");
const db = require("../database/models")
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const operatorsAliases = {
$eq: Op.eq
}

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

   },
   search: function(req, res){
let search = req.body.search
        db.Libro.findAll({
            where:{
                titulo: {[Op.like]: "%"+ search + "%"}
            }
        })
        .then(function(libros) {
if(libros == ""){
  res.render("notFound", {
    data: req.session.usuarioLogueado,
    libroBuscado: req.body.search
  })
} else{
  return res.render('products', {
    libros: libros,
   data: req.session.usuarioLogueado})
}  })
},

orderBy: function(req, res){
  db.Libro.findAll({
    order: [
      ["precio", "ASC"]
    ]
  })
  .then(function(libros){
    res.render("products", {
      libros: libros,
      data: req.session.usuarioLogueado,
      order: "Precio: de menor a mayor"
    })
  })
},
priceBetween1: function(req, res){

 db.Libro.findAll({
    where: {
     precio: 
     { [Op.between]: [500, 1000] }
    },
    order: [
      ["precio", "ASC"]
    ]
  })
.then(function(libros){
  res.render("products", {
    libros: libros,
    data: req.session.usuarioLogueado,
    between1: "Entre 500 a 1000"
  })
})


},
priceBetween2: function(req, res){

  db.Libro.findAll({
     where: {
      precio: 
      { [Op.between]: [1000, 2000] }
     },
     order: [
       ["precio", "ASC"]
     ]
   })
 .then(function(libros){
   res.render("products", {
     libros: libros,
     data: req.session.usuarioLogueado,
     between2: "Entre 1000 a 2000"
   })
 })
 
 
 },
 priceBetween3: function(req, res){

  db.Libro.findAll({
     where: {
      precio: 
      { [Op.between]: [2000, 3000] }
     },
     order: [
       ["precio", "ASC"]
     ]
   })
 .then(function(libros){
   res.render("products", {
     libros: libros,
     data: req.session.usuarioLogueado,
     between3: "Entre 2000 a 2500"
   })
 })
 
 
 },
   
   
   
   }
   module.exports= productosController;
  