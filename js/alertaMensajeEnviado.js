
function validar() {

    if ($('#nombre').val().length == 0) {
         alert('Ingrese nombre');  
        return false;
    }

    if ($('#apellido').val().length == 0) {
        alert('Ingrese apellido');
        return false;
      }

      if ($('#correo').val().length == 0) {
        alert('Ingrese correo');
        return false;
      }

      if ($('#telefono').val().length == 0) {
        alert('Ingrese telefono');
        return false;
      }

      if ($('#text-area').val().length == 0) {
  alert("ingrese mensaje mensaje")
    return false;
      }

       else{
   swal("Muy bien !", "Te contactaremos en el menor tiempo posible", "success")
               
            }
      }

    
  