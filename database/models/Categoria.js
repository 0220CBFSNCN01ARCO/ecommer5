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

    // relacion pertenece a. Una categoria pertenece a un libro
    
    /*Categoria.associate = function(models) {
        Categoria.belongsTo(models.Libro, {
            as: "categorialibros",
            foreingKey: "libro_id"
        });*/

    // relacion muchos a muchos. Las categorias tienen muchos libros. 

    Categoria.associate = function(models) {
    Categoria.belongsToMany(models.Libro, {
            as: "libroscategoria",
            through: "libros_autores", 
            foreignKey: "categoria_id",
            otherKey: "libro_id",
            timestamps: false
            });

    }

    return Categoria;
}