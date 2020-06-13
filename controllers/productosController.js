const fs = require('fs');
const path = require("path");
const productsPath = path.join(".", "data", "detalleProductos.json");


const productosController = {
listado : function(req, res){
    res.render("products", {"products": listadoProductos});
},
detalle : function(req, res){
let idProductoElegido = req.params.idProduct;
const productoAMostrar = listadoProductos.find(producto => {
    return listadoProductos.idProduct == idProductoElegido
});
    res.render("detalleProducto", {"productoClickeado": productoAMostrar});
},
create : function(req, res){
    res.render("createProduct");
},
agregar: function(req, res){
    let producto = {
        id: req.body.id,
        titulo: req.body.titulo,
        categoria: req.body.categoria
    }
    let archivoProductos = fs.readFileSync("detalleProductos.json", {encoding: "utf-8"});
    let productos;
if(archivoProductos == ""){
   productos = [];
} else {
   productos = JSON.parse(archivoProductos);
}
usuarios.push(producto);

let productoJSON = JSON.stringify(productos);
fs.appendFileSync("detalleProductos.json", productoJSON);

res.redirect("/products", {"productoJSON": productoJSON})
},
update: function(req, res){
    res.redirect("/products", {title: "Se modificó un producto"});
},
delete: function(req, res){

    res.redirect("/product")
},

};


module.exports= productosController;