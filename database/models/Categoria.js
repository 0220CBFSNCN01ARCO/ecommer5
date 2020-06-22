module.exports = function(sequelize, dataTypes) {
    let alias = "Categoria";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKeY: true,
            autoIncrement: true
        },
        category: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "Categorias",
        timestamps: false
    }

    let Categoria = sequelize.difine(alias, cols, config);

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
            through: "autor_libro",
            foreignKey: "categoria_id",
            otherKey: "libro_id",
            timestamps: false
            });

    }

    return Categoria;
}