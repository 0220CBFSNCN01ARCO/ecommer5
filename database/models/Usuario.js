module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario", 
    {
        idusuario: {
            type: DataTypes.INTEGER,//(11),
            primaryKey: true,
            autoIncrement: true
        },

        nombre: {
            type: DataTypes.STRING//(45)
        },
        email: {
            type: DataTypes.STRING//(45)
        },
        direccion: {
            type: DataTypes.STRING//(11)
        },
        cp: {
            type: DataTypes.INTEGER//(11)
        },
        password: {
            type: DataTypes.STRING//(45)
        },
        localidad: {
            type: DataTypes.STRING//(45)
        },
        provincia: {
            type: DataTypes.STRING//(45)
        },
        avatar: {
            type: DataTypes.STRING//(450)
        },
        rol: {
            type: DataTypes.INTEGER//(11)
        }
    }, 
    {
        tableName: "usuarios",
        timestamps: false
    }
    );
    
    
    return Usuario;
 
}




