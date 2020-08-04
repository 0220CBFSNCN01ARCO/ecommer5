function redirectToProfileIfAuthenticated(req, res, next) {
    if(req.session.usuarioLoginRol == 0) {
        return res.redirect('/users/account')
    } else if (req.session.usuarioLoginRol == 1){
        return res.redirect("/admin/profileAdmin")

    }else{
        next();
    }
}

module.exports = redirectToProfileIfAuthenticated;