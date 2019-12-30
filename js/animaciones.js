
      var ancho = $( window ).width(); // variable que almacena el ancho de la pantalla del dispositivo

           if(ancho < 768){
               animacionProfesionales.classList.remove("scrollflow")
               animacionServicios.classList.remove('scrollflow')
               animacionVentajas.classList.remove('scrollflow')
            
           }

var elementos = animacionServicios.classList;       // se leen las clases asociadas al div con id="animacionServicios"          
console.log(elementos)



    


