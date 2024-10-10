const boss = document.getElementById('boss');


    console.log('click');
    fetch('https://fakestoreapi.com/products',console.log('pidiendo datos'))
        .then(response => response.json(), console.log('recibiendo datos'))
        .then(dress => {
            console.log(dress);
            dress.forEach(dress => {
                console.log(ReadableStreamDefaultReader);
                boss.innerHTML += `<div class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="${dress.image}" data-holder-rendered="true" style="height: 20rem; width: 95%; display: block;">
                  <div class="card-body">
                    <p class="card-text">$${dress.price}</p>
                    <p class="card-text">${dress.id}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                      </div>
                      <small class="text-muted">${dress.category}</small>
                    </div>
                  </div>
                </div>
              </div>`;
            });
        });

