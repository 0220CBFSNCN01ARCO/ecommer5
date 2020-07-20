window.addEventListener("load", function(){
    console.log("Hola")
    
    //validación de eliminación en vista editProduct al clickear en botón de delete
    let iconoDelete = document.querySelector(".iconodelete");
    iconoDelete.addEventListener("click", function(e){

        let confirmDelete = confirm("¿Estás seguro de querer eliminar este producto?")
        
            if(confirmDelete == false){
                e.preventDefault()
            } 
        
        
        })
        //validación de edición en vista editProduct al clickear en botón de edición
        let iconoEdit = document.querySelector(".iconoedit")
        iconoEdit.addEventListener("click", function(e){
            let confirmEdit = confirm("¿Estás seguro de querer editar este producto?")

            if(confirmEdit == false){
                e.preventDefault()
            }
        })
    })

//validación de campos de formulario de registración de usuario
window.addEventListener("load", function(){

    let formulario = document.querySelector("form.registeruser");
    formulario.addEventListener("submit", function(e){
        e.preventDefault();
let campoNombre = document.getElementById("camponombre");
if(campoNombre.value == ""){
    alert("Tenés que completar tu nombre y apellido")
} else if(campoNombre.value.length < 4){
alert("El campo de nombre debe tener al menos 4 caracteres")
}

})

})
