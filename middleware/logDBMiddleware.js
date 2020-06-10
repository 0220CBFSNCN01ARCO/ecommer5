const fs = require('fs');

function logDBMiddleware(req, res, next) {
    fs.appendFileSync('logDB.txt', 'Se creo un registro al ingresar enurl  ' + req.url)

    next();
}

module.exports = logDBMiddleware;