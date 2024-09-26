const boton = document.getElementById('boton');
boton.addEventListener('click', agregarCarta);

    function agregarCarta() {
        const nombre = document.getElementById('nombre').value;
        const lugar= document.getElementById('lugar').value;
        const descripcion = document.getElementById('descripcion').value;
      
        const nuevaCarta = document.createElement('div');
        nuevaCarta.classList.add('carta');
        nuevaCarta.innerHTML = `<div class="card" style="width: 18rem;">
        <div class="card-body">
       <h5 class="card-title">${nombre}</h5>
        <p class="card-text">${lugar}</p>
        <p class="card-text">${descripcion}</p>
         </div>
          </div>`;
        const contenedor = document.getElementById('contenedor');
        contenedor.appendChild(nuevaCarta);

}
