
const cartController = {
    cart: function(req, res){


        res.render("cart",{
            data: req.session.usuarioLogueado
        })
    }
}

    
    
    module.exports = cartController