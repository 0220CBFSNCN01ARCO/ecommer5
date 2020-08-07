window.onload = function(){

    fetch("https://api.giphy.com/v1/gifs/search?api_key=zzgAXB3x24VRWBPaNXKPgi2Pi1UFALwx&q=the-lord-of-rings-chemistry-organic&limit=1&offset=0&rating=g&lang=en")
    .then(function(respuesta){
return respuesta.json()
    })
    .then(function(informacion){
console.log(informacion.data);
for(let i = 0; i < informacion.data.length; i++){
    let gif = "<img src=" + informacion.data[i].images.original.url + ">"
    document.querySelector("ul").innerHTML += "<li>" + gif + "</li>"
}
    })
}
