const formulario = document.querySelector('.formulario');
   
// Escucha el evento 'submit' del formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

    // Captura los valores de los campos del formulario
    const nombre_usuario = document.getElementById('nombre').value;
    const numero_cta = document.getElementById('numero_cta').value;
    const contrasena = document.getElementById('contrasena').value;
    const correo = document.getElementById('correo').value;

    // Crea el objeto con el formato esperado por tu API
    const datos = {
        nombre_usuario: nombre_usuario,
        numero_cta: numero_cta,
        contrasena: contrasena,
        correo: correo
    };

    // Envía los datos a la API usando fetch
    fetch('http://148.213.3.154:3000/agregar', {
        method: 'POST', // Usa el método POST
        headers: {
            'Content-Type': 'application/json' // Especifica el tipo de contenido
        },
        body: JSON.stringify(datos) // Convierte el objeto a JSON
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Convierte la respuesta en JSON
        } else {
            throw new Error('Error al enviar los datos');
        }
    })
    .then(data => {
        console.log('Datos enviados correctamente:', data);
        alert("Tus datos se enviaron correctamente" + nombre_usuario);
        location.href="/"
        // Aquí puedes hacer algo con la respuesta
    })
    .catch(error => {
        console.error('Error:', error);
    });
});