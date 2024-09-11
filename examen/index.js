const formulario = document.querySelector('.formulario');
   
// Escucha el evento 'submit' del formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

    // Captura los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const comentario = document.getElementById('comentario').value;

    // Crea el objeto con el formato esperado por tu API
    const datos = {
        nombre: nombre,
        correo: correo,
        comentario: comentario,
    }

    if(nombre == "" || correo == "" || comentario == ""){
        alert("Llena todos los campos");
    }
    else{
        alert("termine el examen, GILBERTO ");
    }
});
