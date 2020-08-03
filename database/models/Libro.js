
module.exports = (sequelize, DataTypes) => {
  const Libro = sequelize.define(
    "Libro",
    {
      idlibros: {
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
      autor: {
        type: DataTypes.STRING, //(450) VARCHAR
      },
      precio: {
        type: DataTypes.INTEGER, //(11)
      },
      stock: {
        type: DataTypes.INTEGER, //(11)
      },
      descripcion: {
        type: DataTypes.STRING, //(11)
      },
      idcategorias: {
        type: DataTypes.INTEGER, //(11)
      }
    },
    {
      tableName: "libros",
      timestamps: false,
    }
  );
 
  Libro.associate = function(models){
    Libro.belongsTo(models.Categoria, {
        as: "categoria",
        foreignKey: "idcategorias",
        timestamps: false,
      });
  }
  return Libro;
}



// Libro Autor - relacion. Un Autor hasmany Libros al igual que Categorias. Libros belongsto pertenece a un Autor y Categoria. 
