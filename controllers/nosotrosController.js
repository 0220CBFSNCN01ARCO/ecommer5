const nosotrosController = {
    nosotros: function(req, res){
        res.render("aboutUs", {
            data: req.session.usuarioLogueado
        })
    }
}

    
    
    module.exports = nosotrosController