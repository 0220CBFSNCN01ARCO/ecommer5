module.exports = function(sequelize, DataTypes) {
    let alias = "Usuario";

    let cols = {
        id: {
            type: DataTypes.INTEGER,//(11),
            primaryKey: true,
            autoIncrement: true
        },

        nombre: {
            type: DataTypes.STRING//(45)
        },
        email: {
            type: DataTypes.STRING//(45)
        },
        direccion: {
            type: DataTypes.STRING//(11)
        },
        cp: {
            type: DataTypes.INTEGER//(11)
        },
        password: {
            type: DataTypes.STRING//(45)
        },
        localidad: {
            type: DataTypes.STRING//(45)
        },
        provincia: {
            type: DataTypes.STRING//(45)
        },
        avatar: {
            type: DataTypes.STRING//(450)
        }
    }

    let config = {
        tableName: "usuarios",
        timestamps: false
    }


// relacion uno a muchos. Los usuarios tienen muchos libros 

let Usuario = sequelize.define(alias, cols, config);

//Usuario.associate = function(models) {
  //  Libro.hasMany(models.Libro, {
      //  as: "libros",
       // foreignKey: "idLibro" 
    //});
   
//}

return Usuario;
}

