const db = require("../../database/models");


const usuariosController = {
list : function(req, res){
    db.Usuario.findAll({

            attributes: ['idusuario', 'nombre', 'email'] 
    })
    .then(function(usuarios) {
        for (let i = 0; i < usuarios.length; i++) {
            usuarios[i].setDataValue("endpoint", "/api/users/" + usuarios[i].idusuario)
            
            if(!usuarios) {
                return res.status(404).json({ok: false, msg: 'No se encontró el usuario'})
            }
        }
        
        let respuesta = {
        meta: {
            status: 200,
            count: usuarios.length,
            url: "/api/users"
        },
        data: usuarios
    };
        res.send(respuesta);
    });
    },
detail: function(req, res){
db.Usuario.findByPk(req.params.idusuario, {
    attributes: ['idusuario', 'nombre', 'email', "avatar"] 
})

.then(function(usuario){
    if(!usuario) {
        return res.status(404).json({ok: false, msg: 'No se encontró el usuario'})
    } else {
        userDetail.setDataValue("avatar", `http://localhost:3030/images/users/${userDetail.avatar}`);

        res.json(userDetail);
    }
})

},


    find: function(req, res) {
        db.Usuario.findByPk(req.params.idusuario,{
            attributes: ['idusuario', 'nombre', 'email', "avatar"]
        }
          )
        .then(function(usuarios){

            res.json(usuarios)
        })
    }
};

module.exports = usuariosController;