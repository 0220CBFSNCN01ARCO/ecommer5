function guestMiddleware(req, res, next) {
    if(req.session.usuarioLogueado == undefined) {
        next();
    } else {
        res.render('stopGuest', {data: req.session.usuarioLogueado});
    }

}

module.exports = guestMiddleware;