const fs = require('fs');


const productosController = {
listado : function(req, res){
    res.render("products");
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
agregar: function(req, res, next){
    let producto = {
        titulo: req.body.titulo,
        autor: req.body.autor,
        precio: req.body.precio,
        stock: req.body.stock,
        categoria: req.body.categoria,
        imagen: req.files[0].filename
    }
    let archivoProductos = fs.readFileSync("./data/detalleProductos.json", {encoding: "utf-8"});
    let productos;
if(archivoProductos == ""){
   productos = [];
} else {
   productos = JSON.parse(archivoProductos);
}
productos.push(producto);

let productoJSON = JSON.stringify(productos);
fs.appendFileSync("./data/detalleProductos.json", productoJSON);

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