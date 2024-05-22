let listaProductos = document.querySelector("#listaProductos"); //esto es igual al document.getElementById
let listaCategorias = document.querySelector("#listaCategorias")

const URL = "https://fakestoreapi.com/products"

fetch(URL)
    .then(response => response.json())
    .then( productosObtenidos=> {
        listaProductos.innerHTML = "";
        productosObtenidos.forEach( (producto, indice) => {
            listaProductos.innerHTML += `
            <div class="col-12 col-md-3 py-5">
                <div class="card">
                    <img src="${producto.image}" class="imagenProducto card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${producto.title.slice(0,20)}</h5>
                        <p class="card-text">${producto.description.slice(0,70)}</p>
                        <p class="card-text text-danger">${producto.price}</p>
                        <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>`;s
        });
    });