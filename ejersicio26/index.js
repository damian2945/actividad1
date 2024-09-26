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
let dibujar = document.querySelector("#productos-container");
dibujar.innerHTML = ``;

for (let i=0; i<libro.length; i++){ 
    dibujar.innerHTML += `<div class="col-3">
    <p>${libro[i].titulo}</p>
    <p>${libro[i].paginas}</p>

    </div> <br> <br>`;
}
