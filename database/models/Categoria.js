module.exports = function(sequelize, DataTypes) {
    let alias = "Categoria";

    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.VARCHAR(45)
        },
        idLibro: {
            type: DataTypes.INTEGER(11)
        }
    }

    let config = {
        tableName: "categorias",
        timestamps: false
    }

    let Categoria = sequelize.define(alias, cols, config);


// relacion uno a muchos. Una categoría tiene muchos libros
    Categoria.associate = function(models) {
    Categoria.hasMany(models.Libro, {
            as: "libros",
            foreignKey: "idLibro",
            timestamps: false
            });
    }

    return Categoria;
}