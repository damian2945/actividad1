const boton = document.getElementById('boton');



boton.addEventListener('click', agregarCarta);

function agregarCarta() {
  const nombre = document.getElementById('nombre').value;
  const lugar = document.getElementById('lugar').value;
  const descripcion = document.getElementById('descripcion').value;
  const dia = document.getElementById('dia').value;
  const hora = document.getElementById('hora').value;
  const costo = document.getElementById('costo').value;


  let eventos = localStorage.getItem('eventos') ? JSON.parse(localStorage.getItem('eventos')) : [];

  eventos.push({
    nombre,
    lugar,
    descripcion,
    dia,
    hora,
    costo
  });

  localStorage.setItem('eventos', JSON.stringify(eventos));

  mostrarCartas(eventos);

}

function mostrarCartas(data) {

  let html = '';
  data.forEach(element => {
     
   const nuevaCarta = `<div id="card" class="card" style="width: 18rem;">
    <div class="card-body">
   <h5 class="card-title">${element.nombre}</h5>
    <p class="card-text">${element.lugar}</p>
    <p class="card-text">${element.dia}</p>
    <p class="card-text">${element.hora}</p>
    <p class="card-text">${element.costo}</p>
    <p class="card-text">${element.descripcion}</p>
     </div>
      </div>`;

    html += nuevaCarta;
  });


  const contenedor = document.getElementById('contenedor');
  contenedor.innerHTML = html;

}


mostrarCartas(JSON.parse(localStorage.getItem('eventos')) || []);




fetch('https://jsonplaceholder.typicode.com/posts/$nombre', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}).then(response => response.json()).then(data => {
  localStorage.setItem('nombre', data.nombre);
}).catch(error => {
  console.log('Error:', error);
});