const db = require("../database/models")

const index = (req, res) => {

    db.Libro.findAll({
        limit: 5
    })
    .then(function(libros) {
        return res.render("index", {
          libros: libros,
          data: req.session.usuarioLogueado
      });
      })
    

};


module.exports = {index}