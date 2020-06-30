module.exports = function(sequelize, dataTypes) {
let alias = "Autor";

let cols = {
    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: dataTypes.VARCHAR(45)
    },
    idLibro: {
        type: dataTypes.INTEGER(11)
    }
}

let config = {
    tableName: "Autores",
    timestamps: false
}

let Autor = sequelize.define(alias, cols, config);

// relacion de muchos a muchos. Autores tienen muchos libros

Autor.associate = function(models) {
    Autor.belongsToMany(models.Libro, {
        as: "libros",
        through: "libros_autores",
        foreingKey: "idLibro",
        timestamps: false
    });

}
}
return Autor;