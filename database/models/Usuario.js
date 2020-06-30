module.exports = function(sequelize, DataTypes) {
    let alias = "Usuario";

    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.VARCHAR(45)
        },
        email: {
            type: DataTypes.VARCHAR(45)
        },
        direccion: {
            type: DataTypes.INTEGER(11)
        },
        cp: {
            type: DataTypes.INTEGER(11)
        },
        password: {
            type: DataTypes.VARCHAR(45)
        },
        localidad: {
            type: DataTypes.VARCHAR(45)
        },
        provincia: {
            type: DataTypes.VARCHAR(45)
        },
        avatar: {
            type: DataTypes.VARCHAR(450)
        }
    }

    let config = {
        tableName: "usuarios",
        timestamps: false
    }


// relacion uno a muchos. Los usuarios tienen muchos libros 

let Usuario = sequelize.define(alias, cols, config);

Usuario.associate = function(models) {
    Autor.hasMany(models.Libro, {
        as: "libros",
        foreignKey: "idLibro" 
    });
   
}

return Usuario;
}

