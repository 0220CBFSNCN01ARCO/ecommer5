const verifyAdmin = function(req, res, next){
const nombreAVerificar = req.query.user;
const listadoNombresAdmin = ["Yael", "Franco"];

const nombreValido = listadoNombresAdmin.find(user => {return user == nombreAVerificar})

if(!nombreValido){
    res.send("No tenés los permisos para ingresar a esta página")
}

req.nombreAdmin = nombreAVerificar

next()

};

module.exports = {verifyAdmin}