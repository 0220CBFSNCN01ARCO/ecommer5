const db = require("../../database/models");


const usuariosController = {
list : function(req, res){
    db.Usuario.findAll({
    })
    .then(function(usuarios) {
        for (let i = 0; i < usuarios.lenght; i++) {
            usuarios[i].setDatValue("endpoint", "/api/users/" + usuarios[i].id)
        }
        let respuesta = {
        meta: {
            status: 200,
            total: usuarios.lenght,
            url: "/api/users"
        },
        data: usuarios
    };
        res.send(respuesta);
    });
    },
    find: function(req, res) {
        db.Usuario.findByPk(req.params.id)
        .then(function(usuarios){

            res.send(usuarios)
        })
    }
};

module.exports = usuariosController;