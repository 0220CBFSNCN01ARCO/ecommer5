const contactController = {
    contact: function(req, res){
        res.render("contact",{
            data: req.session.usuarioLogueado
        })
    }
}

    
    
    module.exports = contactController