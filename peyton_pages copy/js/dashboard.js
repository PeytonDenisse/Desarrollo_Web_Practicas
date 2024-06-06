let formulario = document.getElementById("formularioAgregar");
let formularioEditar = document.getElementById("formularioEditar");
let nombre = document.getElementById("nombre");
let fecha = document.getElementById("fecha");
let descripcion = document.getElementById("descripcion");
let listaTareas = document.getElementById("listasTareas");

document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar la búsqueda en todas las páginas
    function handleSearch() {
        const searchInput = document.getElementById('search');
        const cards = document.querySelectorAll('.card');

        searchInput.addEventListener('input', function() {
            const searchTerm = searchInput.value.toLowerCase();
            cards.forEach(function(card) {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                const description = card.querySelector('.card-text').textContent.toLowerCase();
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.parentElement.style.display = 'block';
                } else {
                    card.parentElement.style.display = 'none';
                }
            });
        });
    }

    // Llama a la función de búsqueda para todas las páginas
    handleSearch();

    if (document.getElementById('listasTareas')) {
        // Estamos en dashboard.html
        mostrarProyectos();
        document.getElementById('formularioAgregar').addEventListener('submit', agregarProyecto);
        document.getElementById('formularioEditar').addEventListener('submit', guardarCambios);
    } else if (document.getElementById('listaTareas')) {
        // Estamos en index.html
        mostrarTareas();
    }
});

let proyectos = JSON.parse(localStorage.getItem('proyectos')) || [
    {
        nombre: "Proyecto 1",
        fecha: "2021-09-01",
        descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
        imagen: "",
        video: "https://youtu.be/OvhVLFQmgOY",
        audio: "",
        completada: false
    },
    {
        nombre: "Proyecto 2",
        fecha: "2021-09-02",
        descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
        imagen: "",
        video: "https://youtu.be/OvhVLFQmgOY",
        audio: "",
        completada: false
    },
    {
        nombre: "Proyecto 3",
        fecha: "2021-09-03",
        descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
        imagen: "",
        video: "https://youtu.be/OvhVLFQmgOY",
        audio: "",
        completada: false
    },
    {
        nombre: "Proyecto 4",
        fecha: "2021-09-01",
        descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
        imagen: "",
        video: "https://youtu.be/OvhVLFQmgOY",
        audio: "",
        completada: false
    },
    {
        nombre: "Proyecto 5",
        fecha: "2021-09-02",
        descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
        imagen: "",
        video: "https://youtu.be/OvhVLFQmgOY",
        audio: "",
        completada: false
    },
    {
        nombre: "Proyecto 6",
        fecha: "2021-09-03",
        descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
        imagen: "",
        video: "https://youtu.be/OvhVLFQmgOY",
        audio: "",
        completada: false
    },
];

document.addEventListener('DOMContentLoaded', function() {
    // Asignar evento de agregar proyecto
    if (document.getElementById('formularioAgregar')) {
        document.getElementById('formularioAgregar').addEventListener('submit', agregarProyecto);
    }

    // Asignar evento de guardar cambios
    if (document.getElementById('formularioEditar')) {
        document.getElementById('formularioEditar').addEventListener('submit', guardarCambios);
    }

    // Mostrar proyectos al cargar la página
    mostrarProyectos();
});

// Función para mostrar los proyectos en el dashboard
function mostrarProyectos() {
    const listaProyectos = document.getElementById("listasTareas");
    listaProyectos.innerHTML = "";
    proyectos.forEach((proyecto, indice) => {
        listaProyectos.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4 mb-3">
            <div class="card bg-dark text-white">
                <div class="card-body">
                    <h5 class="card-title mb-3 bg-dark" style="color: white; padding: 10px; border-radius: 10px">${proyecto.nombre}</h5>
                    ${proyecto.imagen ? `<img src="${proyecto.imagen}" class="card-img mb-2" alt="Imagen">` : ""}
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item bg-dark text-white">${proyecto.video ? `<iframe class="card-video mb-2" width="100%" height="200" src="${convertirUrlYouTube(proyecto.video)}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : ""}</li>
                        <li class="list-group-item bg-dark text-white">${proyecto.audio ? `<audio controls src="${proyecto.audio}" class="card-audio w-100 mb-2"></audio>` : ""}</li>
                    </ul>
                    <div class="mb-3">
                        <h6 class="card-subtitle mb-2 text-muted text-end">${proyecto.fecha}</h6>
                        <p class="card-text">${proyecto.descripcion}</p>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-primary me-2" data-index="${indice}" onclick="editarProyecto(${indice})">Editar</button>
                        <button class="btn btn-danger" data-index="${indice}" onclick="confirmarBorrarProyecto(${indice})">Borrar</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    // Guardar proyectos en localStorage
    localStorage.setItem('proyectos', JSON.stringify(proyectos));
}

// Función para abrir el modal de edición con los datos del proyecto seleccionado
function editarProyecto(indice) {
    const proyecto = proyectos[indice];
    document.getElementById('indiceEditar').value = indice;
    document.getElementById('nombreEditar').value = proyecto.nombre;
    document.getElementById('fechaEditar').value = proyecto.fecha;
    document.getElementById('descripcionEditar').value = proyecto.descripcion;
    document.getElementById('imagenUrlEditar').value = proyecto.imagen;
    document.getElementById('videoUrlEditar').value = proyecto.video;
    document.getElementById('audioUrlEditar').value = proyecto.audio;
    const editarModal = new bootstrap.Modal(document.getElementById('editarModal'));
    editarModal.show();
}

// Función para guardar los cambios del proyecto editado
function guardarCambios(event) {
    event.preventDefault();
    const indice = document.getElementById('indiceEditar').value;
    proyectos[indice].nombre = document.getElementById('nombreEditar').value;
    proyectos[indice].fecha = document.getElementById('fechaEditar').value;
    proyectos[indice].descripcion = document.getElementById('descripcionEditar').value;
    proyectos[indice].imagen = document.getElementById('imagenUrlEditar').value;
    proyectos[indice].video = document.getElementById('videoUrlEditar').value;
    proyectos[indice].audio = document.getElementById('audioUrlEditar').value;
    
    mostrarProyectos();
    document.getElementById('formularioEditar').reset();
    const editarModal = bootstrap.Modal.getInstance(document.getElementById('editarModal'));
    editarModal.hide();
}

// Función para agregar un nuevo proyecto
function agregarProyecto(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const descripcion = document.getElementById('descripcion').value;
    const imagen = document.getElementById('imagenUrl').value;
    const video = document.getElementById('videoUrl').value;
    const audio = document.getElementById('audioUrl').value;

    const nuevoProyecto = {
        nombre,
        fecha,
        descripcion,
        imagen,
        video,
        audio,
        completada: false
    };

    proyectos.push(nuevoProyecto);
    mostrarProyectos();
    document.getElementById('formularioAgregar').reset();
    const nuevoModal = bootstrap.Modal.getInstance(document.getElementById('nuevoModal'));
    nuevoModal.hide();
}

// Función para confirmar antes de borrar un proyecto
function confirmarBorrarProyecto(indice) {
    const confirmacion = confirm('¿Estás seguro de que quieres borrar este proyecto?');
    if (confirmacion) {
        borrarProyecto(indice);
    }
}

// Función para borrar un proyecto
function borrarProyecto(indice) {
    proyectos.splice(indice, 1);
    mostrarProyectos();
}

// Función para convertir URL de YouTube a formato embed
function convertirUrlYouTube(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length == 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
}

function logout() {
    window.location.href = 'index.html';
}
