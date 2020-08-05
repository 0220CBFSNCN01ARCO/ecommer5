const promocionesController = {
    promociones: function(req, res){
        res.render("promociones", {
            data: req.session.usuarioLogueado
        })
    }
}

    
    module.exports = promocionesController