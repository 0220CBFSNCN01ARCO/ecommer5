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

// relacion de tiene. Autores tienen muchos libros

Autor.associate = function(models) {
    Autor.hasMany(models.Libro, {
        as: "libros",
        foreingKey: "idLibro" 
    });

}
}
return Autor;