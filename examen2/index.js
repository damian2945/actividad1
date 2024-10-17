     const boton = document.getElementById('boton');
     const cont = document.getElementById('cont');

      console.log('click');
     fetch('#',console.log('pidiendo datos'))
         .then(response => response.json(), console.log('recibiendo datos'))
         .then(datos => {
        console.log(datos);
        datos.forEach(datos => {
            console.log(ReadableStreamDefaultReader);
            cont.innerHTML += `<div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="${dress.image}" data-holder-rendered="true" style="height: 20rem; width: 95%; display: block;">
              <div class="card-body">
                <p class="card-text">$${l}</p>
                <p class="card-text">${l}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                  </div>
                </div>
              </div>
            </div>
          </div>`;
        });
    });




boton.addEventListener('click', agregarCarta);

function agregarCarta() {
    const nombre = document.getElementById('nombre').value;
    const no_cuenta = document.getElementById('no.cuenta').value;
    const grado = document.getElementById('grado').value;
    const carrera = document.getElementById('carrera');

    let honor = localStorage.getItem('honor') ? JSON.parse(localStorage.getItem('honor')) : [];

  honor.push({
    nombre,
    no_cuenta,
    grado,
    carrera
  });

  localStorage.setItem('eventos', JSON.stringify(honor));

  mostrarCartas(honor);


}
function mostrarCartas(datos) {

    let html = '';
    datos.forEach(element => {
       
     const nuevaCarta = `<div id="card" class="card" style="width: 18rem;">
      <div class="card-body">
     <h5 class="card-title">${l}</h5>
      <p class="card-text">${l}</p>
      <p class="card-text">${l}</p>
      <p class="card-text">${l}</p>
      <p class="card-text">${l}</p>
      <p class="card-text">${l}</p>
       </div>
        </div>`;
  
      html += nuevaCarta;
    });
  
  
    const cont = document.getElementById('cont');
    contenedor.innerHTML = html;
  
  }

