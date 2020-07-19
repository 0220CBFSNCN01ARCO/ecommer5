//const db = require("../../../database/models")

window.addEventListener("load", function(){
console.log("Hola")

let iconoDelete = document.querySelector(".iconodelete");
iconoDelete.addEventListener("click", function(event){
   
let confirmDelete =  confirm("¿Estás seguro de querer eliminar este producto?")

    if(confirmDelete == false){
        event.preventDefault();
    } 
    

})

let iconoEdit = document.querySelector(".iconoedit");
iconoEdit.addEventListener("click", function(event){
    
    let confirmEdit =  confirm("¿Estás seguro de querer editar este producto?")
   
        if(confirmEdit == false){
            event.preventDefault();
        }
    
    
})

})