

window.addEventListener("load", function(){
console.log("Hola")

let iconoDelete = document.querySelector(".iconodelete");
iconoDelete.addEventListener("click", function(e){
    e.preventDefault();
let confirmDelete =  confirm("¿Estás seguro de querer eliminar este producto?")
});

let iconoEdit = document.querySelector(".iconoedit");
iconoEdit.addEventListener("click", function(e){
    //e.preventDefault();
    let confirmEdit =  confirm("¿Estás seguro de querer editar este producto?")
   let functionEdit = function(req, res){
        if(confirmEdit == false){
            res.render("profileAdmin");
        }else{
          
        }
    }
    
})

})