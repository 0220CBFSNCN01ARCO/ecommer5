module.exports = function(sequelize, DataTypes) {
    let alias = "Libro";

    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: DataTypes.VARCHAR(45)
        },
        portada: {
            type: DataTypes.VARCHAR(450)
        },
        precio: {
            type: DataTypes.INTEGER(11)
        },
        stock: {
            type: DataTypes.INTEGER(11)
        },
        idCategoria: {
            type: DataTypes.INTEGER(11)
        },
        idUsarios: {
            type: DataTypes.INTEGER(11)
        }
    }

    let config = {
        tableName: "libros",
        timestamps: false
    }

    let Libro = sequelize.define(alias, cols, config);

    // relacion muchos a muchos. Los libros tienen muchos autores

    Libro.associate = function(models) {
        Libro.belongsToMany(models.Autor, {
        as: "Autores",
        through: "libros_autores",
        foreignKey: "idLibro",
        otherKey: "idAutor",
        timestamps: false
        });
 // relacion uno a muchos. Un libro tiene una categoría
        Libro.belongsTo(models.Categoria, {
            as: "categoria",
            foreignKey: "idCategoria",
            timestamps: false
            });

    }

    return Libro;

    }