module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define("Categoria",
     {
        id: {
            type: DataTypes.INTEGER,//(11),
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING//(45)
        },
        idLibro: {
            type: DataTypes.INTEGER, //(11)
          },
    },
    {
        tableName: "categorias",
        timestamps: false
    }
    ); 
    // Una categoria tiene muchos libros. 
    Categoria.associate = function(models) {
        Categoria.hasMany(models.Libro, {
                as: "libros",
                foreignKey: "idLibro",
                timestamps: false
                });
        }

        return Categoria;
}