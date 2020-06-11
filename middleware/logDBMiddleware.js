const fs = require('fs');

function logDBMiddleware(req, res, next) {
    fs.appendFileSync('logDB.txt', 'Se creo un registro al ingresar en url  ' + req.url)

    next();
}

module.exports = logDBMiddleware;