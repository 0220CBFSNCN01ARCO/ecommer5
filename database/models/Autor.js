module.exports = (sequelize, DataTypes) => {
    const Autor = sequelize.define("Autor",
    {
        idautores: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        },
    },
    {
        tableName: "autores",
        timestamps: false
    },
    );
    
        Autor.associate = function(models) {
            Autor.hasMany(models.Libro, {
                    as: "libros",
                    foreignKey: "idlibros",
                    timestamps: false
                    });
            }
            return Autor;
    }



// Libro Autor - relacion. Un Autor hasmany Libros al igual que Categorias. Libros belongsto pertenece a un Autor y Categoria. 