window.addEventListener("load", function(){
    console.log("Hola")
    
    let iconoDelete = document.querySelector(".iconodelete");
    iconoDelete.addEventListener("click", function(e){

        let confirmDelete = confirm("¿Estás seguro de querer eliminar este producto?")
        
            if(confirmDelete == false){
                e.preventDefault()
            } 
        
        
        })
        
        let iconoEdit = document.querySelector(".iconoedit")
        iconoEdit.addEventListener("click", function(e){
            let confirmEdit = confirm("¿Estás seguro de querer editar este producto?")

            if(confirmEdit == false){
                e.preventDefault()
            }
        })



    })