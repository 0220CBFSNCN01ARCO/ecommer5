module.exports = function(sequelize, dataTypes) {
    let alias = "Usuario";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.VARCHAR(45)
        },
        email: {
            type: dataTypes.VARCHAR(45)
        },
        direccion: {
            type: dataTypes.INTEGER(11)
        },
        cp: {
            type: dataTypes.INTEGER(11)
        },
        password: {
            type: dataTypes.VARCHAR(45)
        },
        localidad: {
            type: dataTypes.VARCHAR(45)
        },
        provincia: {
            type: dataTypes.VARCHAR(45)
        },
        avatar: {
            type: dataTypes.VARCHAR(450)
        }
    }

    let config = {
        tableName: "Usuarios",
        timestamps: false
    }
}

// relacion uno a muchos. Los usuarios tienen muchos libros 

let Usuario = sequelize.define(alias, cols, config);

Usuario.associate = function(models) {
    Autor.hasMany(models.Libro, {
        as: "libros",
        foreingKey: "idLirbo" 
    });

}
return Usuario;