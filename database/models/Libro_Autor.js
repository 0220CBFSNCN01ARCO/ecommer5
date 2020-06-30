module.exports = function(sequelize, dataTypes) {
    let alias = "Libro_Autor";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idLibro: {
            type: dataTypes.INTEGER(11)
        },
        idAutor: {
            type: dataTypes.INTEGER(11)
        }
    }

    let config = {
        tableName: "Libros_Autores",
        timestamps: false
    }
}