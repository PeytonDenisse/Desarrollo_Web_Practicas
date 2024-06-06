let listaProductos = document.querySelector("#listaProductos");
let listaCategorias = document.querySelector("#listaCategorias");
let listaCarrito = document.querySelector("#listaCarrito");
let carrito = [];
const URL = "https://fakestoreapi.com/products/";
const URLCATEGORIAS = "https://fakestoreapi.com/products/categories";

// Fetch de productos
fetch(URL)
    .then(res => res.json())
    .then(productosObtenidos => {
        console.log(productosObtenidos);
        listaProductos.innerHTML = "";
        productosObtenidos.forEach(producto => {
            listaProductos.innerHTML += `
                <div class="col-12 col-md-4">
                    <div class="card">
                        <img src="${producto.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${producto.title.slice(0, 20)}</h5>
                            <p class="card-text">${producto.description.slice(0, 70)}</p>
                            <p class="card-text text-danger">$ ${producto.price}</p>
                            <button onclick="agregarAlCarrito(${producto.id})" class="btn btn-primary">Agregar al Carrito</button>
                        </div>
                    </div>
                </div>
            `;
        });
    });

// Fetch de categorías
fetch(URLCATEGORIAS)
    .then(res => res.json())
    .then(categoriasObtenidas => {
        console.log(categoriasObtenidas);
        listaCategorias.innerHTML = "";
        categoriasObtenidas.forEach((categoria, indice) => {
            categoria = categoria.replace("´","");
            listaCategorias.innerHTML += `
                <li class="nav-item">
                    <a href="#" onclick="muestraProducto('${categoria}')" class="nav-link">
                        ${categoria.toUpperCase()}
                    </a>
                </li>
            `;
        });
    });

// Función para agregar productos al carrito
function agregarAlCarrito(idProducto) {
    fetch(`${URL}${idProducto}`)
        .then(res => res.json())
        .then(producto => {
            carrito.push(producto);
            mostrarCarrito();
        });
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    listaCarrito.innerHTML = "";
    carrito.forEach((producto, indice) => {
        listaCarrito.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <img src="${producto.image}" alt="${producto.title}" style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px;">
                ${producto.title.slice(0, 20)} - $${producto.price}
                <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${indice})">Eliminar</button>
            </li>
        `;
    });
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(indiceProducto) {
    carrito.splice(indiceProducto, 1);
    mostrarCarrito();
}

// Función para mostrar productos por categoría (filtro)
function muestraProducto(categoria) {
    fetch(`${URL}category/${categoria}`)
        .then(res => res.json())
        .then(productosFiltrados => {
            console.log(productosFiltrados);
            listaProductos.innerHTML = "";
            productosFiltrados.forEach(producto => {
                listaProductos.innerHTML += `
                    <div class="col-12 col-md-4">
                        <div class="card">
                            <img src="${producto.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.title.slice(0, 20)}</h5>
                                <p class="card-text">${producto.description.slice(0, 70)}</p>
                                <p class="card-text text-danger">$ ${producto.price}</p>
                                <button onclick="agregarAlCarrito(${producto.id})" class="btn btn-primary">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                `;
            });
        });
}
