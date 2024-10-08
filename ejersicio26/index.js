var libro = [
    { "titulo": "El Señor de los Anillos",
        "autor": "J.R.R. Tolkien",
        "paginas": 1200,
        "leido": false
    },
    { "titulo": "Los Pilares de la Tierra",
        "autor": "Ken Follett",
        "paginas": 2000,
        "leido": true
    },
    { "titulo": "Cien años de soledad",
        "autor": "Gabriel García Márquez",
        "paginas": 800,
        "leido": false
    }
];

function agregarTarjeta(libro) {
    let dibujar = document.querySelector("#productos-container");
    let tarjetaHTML = `
        <div class="col-3">
            <p>${libro.titulo}</p>
            <p>${libro.paginas}</p>
        </div> <br> <br>`;
    dibujar.innerHTML += tarjetaHTML;
}

// Limpiar el contenedor antes de añadir las tarjetas
document.querySelector("#productos-container").innerHTML = ``;

// Añadir una tarjeta para cada libro en el array
for (let i = 0; i < libro.length; i++) {
    agregarTarjeta(libro[i]);
}
