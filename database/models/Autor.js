//const { Sequelize } = require(".");

module.exports = function(sequelize, DataTypes) {
    let alias = "Autor";
    
    let cols = {
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
    }
    
    let config = {
        tableName: "autor",
        timestamps: false
    }
    
    let Autor = sequelize.define(alias, cols, config);
    
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
    