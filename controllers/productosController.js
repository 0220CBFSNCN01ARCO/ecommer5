const fs = require('fs');
let listadoProductos = fs.readFileSync("./data/detalleProductos.json", {encoding: "utf-8"});

const productosController = {
listado : function(req, res){
    res.render("products");
},

create : function(req, res){
res.render("createProduct")
},

agregar: function(req, res, next){
   
    let errors = validationResult(req);

    if(errors.isEmpty()){
      
      let productosJSON = fs.readFileSync("./data/detalleProductos.json", {encoding: "utf-8"});
      let productos;
      if (productosJSON == "") {
        productos = [];
      } else {
      productos = JSON.parse(productosJSON);
  
      }
      let producto = {
        titulo: req.body.titulo,
        autor: req.body.autor,
        categoria: req.body.categoria,
        precio: req.body.precio,
        stock: req.body.sotck,
        avatar: req.files[0].filename,
  
      }
  
      productos.push(producto);
  
      productosJSON = JSON.stringify(productos);
  
      fs.appendFileSync("./data/detalleProductos.json", productosJSON);
  
      res.redirect('/products');
    } else {
      res.render("createProduct", {errors: errors.errors})
    }


},
update: function(req, res){
    res.redirect("/products", {title: "Se modificó un producto"});
},
delete: function(req, res){

    res.redirect("/product")
},

};


module.exports= productosController;