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
let campoProvincia = document.getElementById("provincia");
if(campoProvincia.value == ""){
    alert("Tenés que seleccionar una provincia")

}
let campoLocalidad = document.getElementById("localidad");
if(campoLocalidad.value == ""){
    alert("Tenés que poner tu localidad")

}
let campoDireccion = document.getElementById("direccion");
if(campoDireccion.value == ""){
    alert("Tenés que poner tu dirección")

}
let campoCp = document.getElementById("cp");
if(campoCp.value == ""){
    alert("Tenés que poner tu código postal")

}
let campoEmail = document.getElementById("email");
if(campoEmail.value == ""){
    alert("Tenés que poner tu email")

}
let campoPassword = document.getElementById("password");
if(campoPassword.value == ""){
    alert("Tenés que poner una contraseña")

}

})

})
