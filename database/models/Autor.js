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
        tableName: "autores",
        timestamps: false
    },
    );
    
        Autor.associate = function(models) {
            Autor.hasMany(models.Libro, {
                    as: "libros",
                    foreignKey: "idLibro",
                    timestamps: false
                    });
            }
            return Autor;
    }



// Libro Autor - relacion. Un Autor hasmany Libros al igual que Categorias. Libros belongsto pertenece a un Autor y Categoria. 