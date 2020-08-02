const db = require("../../database/models");


const productosController = {
list : function(req, res){
    db.Libro.findAll({
    })
    .then(function(productos) {
        for (let i = 0; i < productos.lenght; i++) {
            productos[i].setDatValue("endpoint", "/api/products" + productos[i].id)
        }
        let respuesta = {
        meta: {
            status: 200,
            total: productos.lenght,
            url: "/api/products"
        },
        data: productos
    };
        res.send(respuesta);
    });
    },
    find: function(req, res) {
        db.Libro.findByPk(req.params.id)
        .then(function(productos){

            res.send(productos)
        })
    }
};

module.exports = productosController;