module.exports = function(sequelize, DataTypes) {
    let alias = "Libro_Autor";

    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        idLibro: {
            type: DataTypes.INTEGER(11)
        },
        idAutor: {
            type: DataType.INTEGER(11)
        }
    }

    let config = {
        tableName: "Libros_Autores",
        timestamps: false
    }
}