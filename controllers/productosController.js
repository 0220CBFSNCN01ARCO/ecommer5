const fs = require('fs');
const path = require("path");
const productsPath = path.join(__dirname, '../data/detalleProductos.json');
const listadoProductos = JSON.parse(fs.readFileSync('./data/detalleProductos.json', 'utf-8'));

const productosController = {
"listado" : function(req, res){
    res.render("listadoProductos", {"listadoProductos": listadoProductos});
},
"detalle" : function(req, res){
let idProductoElegido = req.params.idProduct;
const productoAMostrar = listadoProductos.find(producto => {
    return listadoProductos.idProduct == productoAMostrar
});
    res.render("detalleProducto", {"productoClickeado": productoAMostrar});
},
"create" : function(req, res){
    res.render("agregarProducto");
},
"update": function(req, res){
    res.render("")
},
"delete": function(req, res){

    res.redirect("/product")
},

};


module.exports= productosController;