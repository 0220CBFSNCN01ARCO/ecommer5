module.exports = function(sequelize, dataTypes) {
    let alias = "Libro";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        categoria_id: {
            type: dataTypes.INTEGER
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