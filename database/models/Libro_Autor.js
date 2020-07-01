module.exports = function(sequelize, DataTypes) {
    let alias = "Libro_Autor";

    let cols = {
        id: {
<<<<<<< HEAD
            type: DataTypes.INTEGER,//(11)
=======
            type: DataTypes.INTEGER,//(11),
>>>>>>> b909316b1db137b6060c4c43f5356f1a2aaf8337
            primaryKey: true,
            autoIncrement: true
        },
        idLibro: {
            type: DataTypes.INTEGER//(11)
        },
        idAutor: {
            type: DataType.INTEGER//(11)
        }
    

    let: config = {
        tableName: "libros_autores",
        timestamps: false
    }
const Libro_Autor = sequelize.define(alias, cols, config);
return: Libro_Autor

}
}