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
        }
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

    // relacion pertenece a. Los libros pertenecen a un autor

    Libro.associate = function(models) {
        Libro.belongsTo(models.Autor, {
        as: "Autores",
        through: "autor_libro",
        foreignKey: "libro_id",
        otherKey: "categoria_id",
        timestamps: false
        });

    }

    return Libro;

    }