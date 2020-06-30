module.exports = function(sequelize, dataTypes) {
    let alias = "Libro";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.VARCHAR(45)
        },
        portada: {
            type: dataTypes.VARCHAR(45)
        },
        precio: {
            type: dataTypes.INTEGER(11)
        },
        stock: {
            type: dataTypes.INTEGER(11)
        },
        idCategoria: {
            type: dataTypes.INTEGER(11)
        },
        idUsarios: {
            type: dataTypes.INTEGER(11)
        }
    }

    let config = {
        tableName: "Libros",
        timestamps: false
    }

    let Libro = sequelize.define(alias, cols, config);

    // relacion pertenece a. Los libros tienen muchos autores

    Libro.associate = function(models) {
        Libro.hasMany(models.Autor, {
        as: "Autores",
        through: "Libro_Autor",
        foreignKey: "idLibros",
        otherKey: "idCategoria",
        timestamps: false
        });

    }

    return Libro;

    }