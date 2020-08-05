const shippingController = {
    shipping: function(req, res){
        res.render("shipping", {
            data: req.session.usuarioLogueado
        })
    }
}

    
    
    module.exports = shippingController