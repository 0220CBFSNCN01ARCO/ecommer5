
window.addEventListener("load", function(){
    let campoNombre = document.getElementById("nombre");
    let campoProvincia = document.getElementById("provincia");
    let campoLocalidad = document.getElementById("localidad");
    let campoDireccion = document.getElementById("direccion");
    let campoCp = document.getElementById("cp");
    let campoEmail = document.getElementById("email");
    let campoPassword = document.getElementById("password");



campoNombre.addEventListener("change", function (e){
    if(campoNombre.value == " "){
        let mensajeNombre = "Tenés que poner tu nombre y apellido"
        e.preventDefault();
        document.querySelector(".ulnombre").innerHTML += "<li>" + mensajeNombre + "</li>"
    }else if(campoNombre.value.length < 8){
        let mensajeExtensionNombre = "Tu nombre y/o apellido están incompletos"
        e.preventDefault();
        document.querySelector(".ulnombre").innerHTML += "<li>" + mensajeExtensionNombre + "</li>"
    
    }
})

campoProvincia.addEventListener("change", function (e){
    if(campoProvincia.value == " "){
        let mensajeProvincia = "Tenés que seleccionar tu provincia"
        e.preventDefault();
        document.querySelector(".ulprovincia").innerHTML += "<li>" + mensajeProvincia + "</li>"
    }
})


campoLocalidad.addEventListener("change", function (e){
    if(campoLocalidad.value == " "){
        let mensajeLocalidad = "Tenés que completar tu localidad"
        e.preventDefault();
        document.querySelector(".ullocalidad").innerHTML += "<li>" + mensajeLocalidad + "</li>"
    }else if(campoLocalidad.value.length < 8){
        let mensajeExtensionLoc = "El nombre de tu localidad está incompleto"
        e.preventDefault();
        document.querySelector(".ullocalidad").innerHTML += "<li>" + mensajeExtensionLoc + "</li>"
    
    }
})

campoCp.addEventListener("change", function (e){
    if(campoCp.value == " "){
        let mensajeCp = "Falta tu código postal"
        e.preventDefault();
        document.querySelector(".ulcp").innerHTML += "<li>" + mensajeCp + "</li>"
    }else if(campoCp.value.length < 4){
        let mensajeExtensionCp = "El código postal debe tener al menor 4 números"
        e.preventDefault();
        document.querySelector(".ulcp").innerHTML += "<li>" + mensajeExtensionCp + "</li>"
    
    }
})
campoDireccion.addEventListener("change", function (e){
    if(campoDireccion.value == " "){
        let mensajeDireccion = "Tenés que escribir tu dirección"
        e.preventDefault();
        document.querySelector(".uldireccion").innerHTML += "<li>" + mensajeDireccion + "</li>"
    }else if(campoDireccion.value.length < 8){
        let mensajeExtensionDireccion = "Tu domicilio está incompleto"
        e.preventDefault();
        document.querySelector(".uldireccion").innerHTML += "<li>" + mensajeExtensionDireccion + "</li>"
    
    }
})
campoEmail.addEventListener("change", function (e){
    if(campoEmail.value == " "){
        let mensajeMail = "Tenés que escribir tu mail"
        e.preventDefault();
        document.querySelector(".ulmail").innerHTML += "<li>" + mensajeMail + "</li>"
    }else if(campoEmail.value.length < 8){
        let mensajeExtensionMail = "Tu mail está incompleto"
        e.preventDefault();
        document.querySelector(".ulmail").innerHTML += "<li>" + mensajeExtensionMail + "</li>"
    
    }
})
campoPassword.addEventListener("change", function (e){
    if(campoPassword.value == " "){
        let mensajePasword = "Tenés que completar tu contraseña"
        e.preventDefault();
        document.querySelector(".ulpassword").innerHTML += "<li>" + mensajePasword + "</li>"
    }else if(campoPassword.value.length < 8){
        let mensajeExtensionPassword = "La contraseña debe tener al menos 8 caracteres"
        e.preventDefault();
        document.querySelector(".ulpassword").innerHTML += "<li>" + mensajeExtensionPassword + "</li>"
    
    }
})

})
// Validaciones update de usuario. 
window.addEventListener("load", function(){
    let campoNombreActualizacion = document.getElementById("camponombre");
    let campoProvinciaActualizacion = document.getElementById("campoprovincia");
    let campoLocalidadActualizacion = document.getElementById("campolocalidad");
    let campoDireccionActualizacion = document.getElementById("campodireccion");
    let campoCpActualizacion = document.getElementById("campocp");
    let campoEmailActualizacion = document.getElementById("campoemail");
    let campoPasswordActualizacion = document.getElementById("campopassword");



campoNombreActualizacion.addEventListener("change", function (e){
    if(campoNombreActualizacion.value == " "){
        let mensajeNombreActualizacion = "Tenés que poner tu nombre y apellido"
        e.preventDefault();
        document.querySelector(".ulnombreactualizacion").innerHTML += "<li>" + mensajeNombreActualizacion + "</li>"
    }else if(campoNombreActualizacion.value.length < 8){
        let mensajeExtensionNombre = "Tu nombre y/o apellido están incompletos"
        e.preventDefault();
        document.querySelector(".ulnombreactualizacion").innerHTML += "<li>" + mensajeExtensionNombre + "</li>"
    
    }
})
campoProvinciaActualizacion.addEventListener("change", function (e){
    if(campoProvinciaActualizacion.value == " "){
        let mensajeProvinciaActualizacion = "Tenés que seleccionar tu provincia"
        e.preventDefault();
        document.querySelector(".ulprovinciaactualizacion").innerHTML += "<li>" + mensajeProvinciaActualizacion + "</li>"
    }
})
campoLocalidadActualizacion.addEventListener("change", function (e){
    if(campoLocalidadActualizacion.value == " "){
        let mensajeLocalidad = "Tenés que completar tu localidad"
        e.preventDefault();
        document.querySelector(".ullocalidadactualizacion").innerHTML += "<li>" + mensajeLocalidad + "</li>"
    }else if(campoLocalidadActualizacion.value.length < 8){
        let mensajeExtensionLoc = "El nombre de tu localidad está incompleto"
        e.preventDefault();
        document.querySelector(".ullocalidadactualizacion").innerHTML += "<li>" + mensajeExtensionLoc + "</li>"
    
    }
})
campoCpActualizacion.addEventListener("change", function (e){
    if(campoCpActualizacion.value == " "){
        let mensajeCp = "Falta tu código postal"
        e.preventDefault();
        document.querySelector(".ulcpactualizacion").innerHTML += "<li>" + mensajeCp + "</li>"
    }else if(campoCpActualizacion.value.length < 4){
        let mensajeExtensionCp = "El código postal debe tener al menor 4 números"
        e.preventDefault();
        document.querySelector(".ulcpactualizacion").innerHTML += "<li>" + mensajeExtensionCp + "</li>"
    
    }
})
campoDireccionActualizacion.addEventListener("change", function (e){
    if(campoDireccionActualizacion.value == " "){
        let mensajeDireccion = "Tenés que escribir tu dirección"
        e.preventDefault();
        document.querySelector(".uldireccionactualizacion").innerHTML += "<li>" + mensajeDireccion + "</li>"
    }else if(campoDireccionActualizacion.value.length < 8){
        let mensajeExtensionDireccion = "Tu domicilio está incompleto"
        e.preventDefault();
        document.querySelector(".uldireccionactualizacion").innerHTML += "<li>" + mensajeExtensionDireccion + "</li>"
    
    }
})
campoEmailActualizacion.addEventListener("change", function (e){
    if(campoEmailActualizacion.value == " "){
        let mensajeMail = "Tenés que escribir tu mail"
        e.preventDefault();
        document.querySelector(".ulmailactualizacion").innerHTML += "<li>" + mensajeMail + "</li>"
    }else if(campoEmailActualizacion.value.length < 8){
        let mensajeExtensionMail = "Tu mail está incompleto"
        e.preventDefault();
        document.querySelector(".ulmailactualizacion").innerHTML += "<li>" + mensajeExtensionMail + "</li>"
    
    }
})
campoPasswordActualizacion.addEventListener("change", function (e){
    if(campoPasswordActualizacion.value == " "){
        let mensajePasword = "Tenés que completar tu contraseña"
        e.preventDefault();
        document.querySelector(".ulpassword").innerHTML += "<li>" + mensajePasword + "</li>"
    }else if(campoPasswordActualizacion.value.length < 8){
        let mensajeExtensionPassword = "La contraseña debe tener al menos 8 caracteres"
        e.preventDefault();
        document.querySelector(".ulpasswordactualizacion").innerHTML += "<li>" + mensajeExtensionPassword + "</li>"
    
    }
})
})