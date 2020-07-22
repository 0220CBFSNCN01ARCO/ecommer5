function authMiddleware(req, res, next) {
    if(req.session.username != undefined) {
        next();
    } else {
        res.send('Esta pagina es sólo para usuarios');
    }

}

module.exports = authMiddleware;