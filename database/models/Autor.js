let alias = "Autor";

let cols = {
    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: dataTypes.STRING
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
        foreingKey: "autor_id"
    });

}

return Autor;