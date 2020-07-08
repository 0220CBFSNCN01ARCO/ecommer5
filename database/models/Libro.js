
module.exports = (sequelize, DataTypes) => {
  const Libro = sequelize.define(
    "Libro",
    {
      id: {
        type: DataTypes.INTEGER, //(11),
        primaryKey: true,
        autoIncrement: true,
      },
      titulo: {
        type: DataTypes.STRING, //(45) VARCHAR
      },
      portada: {
        type: DataTypes.STRING, //(450) VARCHAR
      },
      precio: {
        type: DataTypes.INTEGER, //(11)
      },
      stock: {
        type: DataTypes.INTEGER, //(11)
      },
      idCategoria: {
        type: DataTypes.INTEGER, //(11)
      },
    },
    {
      tableName: "libros",
      timestamps: false,
    }
  );
  Libro.associate = function(models){
    Libro.belongsTo(models.Autor, {
        as: "categoria",
        foreignKey: "idCategorias",
        timestamps: false,
      });
  }
  Libro.associate = function(models){
    Libro.belongsTo(models.Categoria, {
        as: "autor",
        foreignKey: "idAutor",
        timestamps: false,
      });
  }
  return Libro;
}



// Libro Autor - relacion. Un Autor hasmany Libros al igual que Categorias. Libros belongsto pertenece a un Autor y Categoria. 
