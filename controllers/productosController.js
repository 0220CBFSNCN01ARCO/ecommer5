const fs = require('fs');
const path = require("path");
const productsPath = path.join(".", "data", "detalleProductos.json");
const listadoProductos = JSON.parse(fs.readFileSync('./data/detalleProductos.json', 'utf-8'));

const productosController = {
listado : function(req, res){
    res.render("listadoProductos", {"listadoProductos": listadoProductos});
},
detalle : function(req, res){
let idProductoElegido = req.params.idProduct;
const productoAMostrar = listadoProductos.find(producto => {
    return listadoProductos.idProduct == idProductoElegido
});
    res.render("detalleProducto", {"productoClickeado": productoAMostrar});
},
create : function(req, res){
    let producto = {
        id: req.body.id,
        titulo: req.body.titulo,
        categoria: req.body.categoria
    }
    let archivoProductos = fs.readFileSync("detalleProductos.json", {encoding: "utf-8"});
    let productos;
if(archivoProductos == ""){
   productos = [];
}else{
   productos = JSON.parse(archivoProductos);
}
usuarios.push(producto);

let productoJSON = JSON.stringify(productos);
fs.appendFileSync("detalleProductos.json", productoJSON);

    res.redirect("agregarProducto", {titulo: "Se agregó un nuevo producto"});
},
update: function(req, res){
    res.render("")
},
delete: function(req, res){

    res.redirect("/product")
},

};


module.exports= productosController;