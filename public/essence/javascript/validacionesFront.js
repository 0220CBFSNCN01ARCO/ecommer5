window.addEventListener("load", function(){
    let campoNombre = document.querySelector(".camponombre");
    let campoProvincia = document.querySelector(".provincia");
    let campoLocalidad = document.querySelector(".localidad");
    let campoDireccion = document.querySelector(".direccion");
    let campoCp = document.querySelector(".cp");
    let campoEmail = document.querySelector(".email");
    let campoPassword = document.querySelector(".password");

    if(campoNombre.value == ""){
        let mensaje = "El campo nombre debe estar completo"
document.querySelector(".espacionombre").innerHTML += "<p>" + mensaje + "</p>"



    }




})
