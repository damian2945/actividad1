const boss = document.getElementById('boss');


    console.log('click');
    fetch('https://fakestoreapi.com/products',console.log('pidiendo datos'))
        .then(response => response.json(), console.log('recibiendo datos'))
        .then(dress => {
            console.log(dress);
            dress.forEach(dress => {
                console.log(ReadableStreamDefaultReader);
                boss.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${dress.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${dress.title}</h5>
    <p class="card-text">$${dress.price}</p>
    <p class="card-text">${dress.description}</p>
    
  </div>
</div>`;
            });
        });
