module.exports = (sequelize, DataTypes) => {
  const Libro_Autor =
    ("Libro_Autor",
    {
      id: {
        type: DataTypes.INTEGER, //(11)
        primaryKey: true,
        autoIncrement: true,
      },
      idLibro: {
        type: DataTypes.INTEGER, //(11)
      },
      idAutor: {
        type: DataTypes.INTEGER, //(11)
      },
    },
    {
      tableName: "libros_autores",
      timestamps: false,
    });
  return Libro_Autor;
};
