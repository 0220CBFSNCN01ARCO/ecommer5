module.exports = function(sequelize, dataTypes) {
    let alias = "Categoria";

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
        tableName: "Categorias",
        timestamps: false
    }

    let Categoria = sequelize.define(alias, cols, config);


// relacion uno a muchos. Las categorias tienen muchos libros
    Categoria.associate = function(models) {
    Categoria.hasMany(models.Libro, {
            as: "libroscategoria",
            foreignKey: "idLibro",
            timestamps: false
            });

    }

    return Categoria;
}