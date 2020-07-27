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

        let errores = [];

let campoNombre = document.getElementById("camponombre");
if(campoNombre.value == ""){
    errores.push("Tenés que completar tu nombre y apellido")
} else if(campoNombre.value.length < 4){
    errores.push("El campo Nombre debe tener al menos 4 caracteres")
}
let campoProvincia = document.getElementById("provincia");
if(campoProvincia.value == ""){
   errores.push("Tenés que seleccionar una provincia")
}
let campoLocalidad = document.getElementById("localidad");
if(campoLocalidad.value == ""){
    errores.push("Tenés que poner tu localidad")
} else if(campoLocalidad.value.length < 4){
    errores.push("El campo Localidad debe tener al menos 4 caracteres")

}
let campoDireccion = document.getElementById("direccion");
if(campoDireccion.value == ""){
    errores.push("Tenés que poner tu dirección")
} else if(campoDireccion.value.length < 4){
    errores.push("El campo Dirección debe tener al menos 4 caracteres")

}
let campoCp = document.getElementById("cp");
if(campoCp.value == ""){
    errores.push("Tenés que poner tu código postal")
} else if(campoCp.value.length < 4){
    errores.push("El campo Código Postal debe tener al menos 4 caracteres")

}
let campoEmail = document.getElementById("email");
if(campoEmail.value == ""){
    errores.push("Tenés que poner tu email")
} else if(campoEmail.value.length < 4){
    errores.push("El campo Email debe tener al menos 4 caracteres")

}
let campoPassword = document.getElementById("password");
if(campoPassword.value == ""){
    errores.push("Tenés que poner una contraseña")
} else if(campoPassword.value.length < 8){
    errores.push("El campo Contraseña debe tener al menos 8 caracteres")

}

if (errores.length > 0 ) {
    e.preventDefault();

    let ulErrores = document.querySelector("div.errores ul");
    for (let i = 0; i < errores.length; i++) {
    
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
    }

}

})

})


// validación de campos de login

window.addEventListener("load", function(){

    let login = document.querySelector("form.loginuser");
   login.addEventListener("submit", function(e){

        let erroreslogin = [];

let campoEmail = document.getElementById("email");
if(campoEmail.value == ""){
    erroreslogin.push("Tenés que poner tu email para entrar")
}
let campoPassword = document.getElementById("password");
if(campoPassword.value == ""){
    erroreslogin.push("Tenés que poner tu contraseña para entrar")
}


})

})


//validación de campos de form de carga de productos (createProduct)
window.addEventListener("load", function(){

    let formulario = document.querySelector("form.createform");
    formulario.addEventListener("submit", function(e){

        let errores = [];

let campoTitulo = document.getElementById("titulo");
if(campoTitulo.value == ""){
    errores.push("Falta agregar el título del libro")
} else if(campoTitulo.value.length < 2){
    errores.push("El título debe tener al menos 2 caracteres")
}

let campoAutor = document.getElementById("autor");
if(campoAutor.value == ""){
    errores.push("Falta agregar el autor/a del libro")
} else if(campoAutor.value.length < 4){
    errores.push("El autor/a debe tener al menos 4 carateres")

}
let campoCategoria = document.getElementById("categoria");
if(campoCategoria.value == ""){
   errores.push("Tenés que seleccionar una categoría")
}
let campoPrecio = document.getElementById("precio");
if(campoPrecio.value == ""){
    errores.push("Falta agregar el precio del producto")
} else if(campoPrecio.value.length < 2){
    errores.push("El valor del campo Precio debe ser superior a 10")

}
let campoStock = document.getElementById("stock");
if(campoStock.value == ""){
    errores.push("Tenés que agregar el stock disponible del producto")
} else if(campoStock.value.length < 1){
    errores.push("El valor del campo Stock debe ser superior a 1")

}
let campoDescripcion = document.getElementById("descripcion");
if(campoDescripcion.value == ""){
    errores.push("Falta agregar la descripción del libro")
} else if(campoDescripcion.value.length < 10){
    errores.push("El campo Descripcion debe tener al menos 10 caracteres")

}

if (errores.length > 0 ) {
    e.preventDefault();

    let ulErrores = document.querySelector("div.errores ul");
    for (let i = 0; i < errores.length; i++) {
    
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
    }

}

})

})