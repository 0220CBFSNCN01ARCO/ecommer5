
window.onload = function(){


    fetch("https://api.giphy.com/v1/gifs/search?api_key=jUEnNUOGj8aIQpFyByoGsdcY7EQTaO10&q=80s-goodbye-leave-WTlH9XMLIAD4I&limit=1&offset=0&rating=g&lang=en")
    .then(function(respuesta){
return respuesta.json()
    })
    .then(function(informacion){
 
for(let i = 0; i < informacion.data.length; i++){
    let gif = "<img src=" + informacion.data[i].images.original.url + ">"
    document.querySelector("ul").innerHTML += "<li>" + gif + "</li>"
}
    })
}