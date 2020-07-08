module.exports = (sequelize, DataTypes) => {
    const Autor = sequelize.define("Autor",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        idLibro: {
            type: DataTypes.INTEGER
        }
    },
    {
        tableName: "autor",
        timestamps: false
    },
    );
    
    // relacion de muchos a muchos. Autores tienen muchos libros
    
    Autor.associate = function(models) {
        Autor.belongsToMany(models.Libro, {
            as: "libros",
            through: "libros_autores",
            foreingKey: "idAutor",
            otherKey: "idLibro",
            timestamps: false
        });
    
    }
    return Autor;
}