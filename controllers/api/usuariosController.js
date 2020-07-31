const db = require("../../database/models");


const usuariosController = {
list : function(req, res){
    db.Usuario.findAll({
    })
    .then(function(usuarios) {
        let respuesta = usuarios;

        res.send(respuesta);
    });
    }
}

module.exports = usuariosController;