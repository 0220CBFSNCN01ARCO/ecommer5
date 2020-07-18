const db = require("../../../database/models")

window.addEventListener("load", function(){
console.log("Hola")

let iconoDelete = document.querySelector(".iconodelete");
iconoDelete.addEventListener("click", function(e){
    e.preventDefault();
let confirmDelete =  confirm("¿Estás seguro de querer eliminar este producto?");
let functionDelete = function(req, res){
    if(confirmDelete == false){
        res.send("No eliminaste nada");
    } else {
        db.Libro.update({
            titulo: req.body.titulo,
            autor: req.body.autor,
            precio: req.body.precio,
            stock: req.body.stock,
            descripcion: req.body.descripcion,
            portada: req.body.filename
          }, { where: {
              idlibros: req.params.idlibros
          }
        })
    }
}
})

let iconoEdit = document.querySelector(".iconoedit");
iconoEdit.addEventListener("click", function(e){
    e.preventDefault();
    let confirmEdit =  confirm("¿Estás seguro de querer editar este producto?")
   let functionEdit = function(req, res){
        if(confirmEdit == false){
            res.render("profileAdmin");
        }else{
          
        }
    }
    
})

})