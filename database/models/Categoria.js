module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define("Categoria",
     {
        idcategorias: {
            type: DataTypes.INTEGER,//(11),
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING//(45)
        },
    },
    {
        tableName: "categorias",
        timestamps: false
    }
    ); 
    Categoria.associate = function(models) {
        Categoria.hasMany(models.Libro, {
                as: "libros",
                foreignKey: "idlibros",
                timestamps: false
                });
        }

        return Categoria;
}

// Libro Autor - relacion. Un Autor hasmany Libros al igual que Categorias. Libros belongsto pertenece a un Autor y Categoria. 