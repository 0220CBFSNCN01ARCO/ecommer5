window.addEventListener("load", function(){
    let campoTitulo = document.getElementById("titulo");
    let campoAutor = document.getElementById("autor");
    let campoCategoria = document.getElementById("categoria");
    let campoPrecio = document.getElementById("precio");
    let campoStock = document.getElementById("stock");
    let campoDescripcion = document.getElementById("descripcion");
 



    campoTitulo.addEventListener("change", function (e){
        if(campoTitulo.value == " "){
            let mensajeTitulo = "Tenés que escribir el título del libro"
            e.preventDefault();
            document.querySelector(".ultitulo").innerHTML += "<li>" + mensajeTitulo + "</li>"
        }else if(campoTitulo.value.length < 2){
            let mensajeExtensionTitulo = "El título del libro está incompleto"
            e.preventDefault();
            document.querySelector(".ultitulo").innerHTML += "<li>" + mensajeExtensionTitulo + "</li>"
        
        }
    })


campoAutor.addEventListener("change", function (e){
    if(campoAutor.value == " "){
        let mensajeAutor = "Tenés que poner el autor/a del libro"
        e.preventDefault();
        document.querySelector(".ulautor").innerHTML += "<li>" + mensajeAutor + "</li>"
    }else if(campoAutor.value.length < 2){
        let mensajeExtensionAutor = "El nombre del autor está incompleto"
        e.preventDefault();
        document.querySelector(".ulautor").innerHTML += "<li>" + mensajeExtensionAutor + "</li>"
    
    }
})



campoPrecio.addEventListener("change", function (e){
    if(campoPrecio.value == " "){
        let mensajePrecio = "Falta el precio del libro"
        e.preventDefault();
        document.querySelector(".ulprecio").innerHTML += "<li>" + mensajePrecio + "</li>"
    }else if(campoPrecio.value.length < 100){
        let mensajeExtensionPrecio = "El precio del libro debe ser mayor a 100"
        e.preventDefault();
        document.querySelector(".ulprecio").innerHTML += "<li>" + mensajeExtensionPrecio + "</li>"
    
    }
})
campoStock.addEventListener("change", function (e){
    if(campoStock.value == " "){
        let mensajeStock = "Tenés que especificar el stock del producto"
        e.preventDefault();
        document.querySelector(".ulstock").innerHTML += "<li>" + mensajeStock + "</li>"
    }else if(campoStock.value.length < 0){
        let mensajeExtensionStock = "El stock debe ser mayor a 0"
        e.preventDefault();
        document.querySelector(".ulstock").innerHTML += "<li>" + mensajeExtensionStock + "</li>"
    
    }
})
campoDescripcion.addEventListener("change", function (e){
    if(campoDescripcion.value == " "){
        let mensajeDescripcion = "Tenés que escribir la descrpción del producto"
        e.preventDefault();
        document.querySelector(".uldescripcion").innerHTML += "<li>" + mensajeDescripcion + "</li>"
    }else if(campoDescripcion.value.length < 8){
        let mensajeExtensionDescripcion = "La descripción debe ser más extensa"
        e.preventDefault();
        document.querySelector(".uldescripcion").innerHTML += "<li>" + mensajeExtensionDescripcion + "</li>"
    
    }
})


})


