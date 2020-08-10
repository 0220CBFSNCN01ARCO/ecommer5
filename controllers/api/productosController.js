const db = require("../../database/models");


const productosController = {
list : function(req, res){
    db.Libro.findAll({
        include: [{association: "categoria"}],
        attributes: ['idlibros', 'titulo', 'descripcion'] 
    })
    .then(function(libros) {
        for (let i = 0; i < libros.length; i++) {
            libros[i].setDataValue("endpoint", "/api/products/" + libros[i].idlibros)
        }
    
        
        let respuesta = {
        meta: {
            status: 200,
            total: libros.length,
            url: "/api/products"
          
        },
        data: libros
    };
        res.send(respuesta);
    });
    },
countByCategory: function(req, res){
db.Categoria.findAll({
    include: [{association: "libros"}]
})
.then(function(categorias){
    for (let i = 0; i < categorias.length; i++) {
        categorias[i].setDataValue("endpoint", "/api/products/" + categorias[i].nombre)
    }
})




},


    find: function(req, res) {
        db.Libro.findByPk(req.params.idlibros)
        .then(function(libros){

            res.json(libros)
        })
    }
};

module.exports = productosController;