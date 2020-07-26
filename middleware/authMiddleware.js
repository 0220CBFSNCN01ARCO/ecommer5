function authMiddleware(req, res, next) {
    if(req.session.usuarioLogueado != undefined) {
        next();
    } else {
        res.send('Esta pagina es sólo para usuarios');
    }

}

module.exports = authMiddleware;