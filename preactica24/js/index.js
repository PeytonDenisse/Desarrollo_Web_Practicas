let formulario = document.getElementById("formularioAgregar");
let formularioEditar = document.getElementById("formularioEditar");
let nombre = document.getElementById("nombre");
let fecha = document.getElementById("fecha");
let descripcion = document.getElementById("descripcion");
let listaTareas = document.getElementById("listasTareas");

let tareas = [
    {
        nombre: "Pedro",
        fecha: "2021-09-01",
        descripcion: "Es un mapache",
        imagen: "",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        audio: "",
        completada: false
    },
    {
        nombre: "Bruno",
        fecha: "2021-09-02",
        descripcion: "Chihuahua",
        imagen: "",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        audio: "",
        completada: false
    },
    {
        nombre: "Paco",
        fecha: "2021-09-03",
        descripcion: "Shiba Inu",
        imagen: "",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        audio: "",
        completada: false
    }
];

// mostrar las tareas
function mostrarTareas() {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, indice) => {
        listaTareas.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title mb-3" style="background-color: #007bff; color: white; padding: 10px; border-radius: 10px">${tarea.nombre}</h5>
                    <div class="mb-3">
                        <h6 class="card-subtitle mb-2 text-muted text-end">${tarea.fecha}</h6>
                        <p class="card-text">${tarea.descripcion}</p>
                    </div>
                    ${tarea.imagen ? `<img src="${tarea.imagen}" class="card-img mb-2" alt="Imagen">` : ""}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${tarea.video ? `<video controls autoplay muted src="${tarea.video}" class="card-video mb-2" style="width: 100%; height: auto;"></video>` : ""}</li>
                    <li class="list-group-item">${tarea.audio ? `<audio controls src="${tarea.audio}" class="card-audio w-100 mb-2"></audio>` : ""}</li>
                    <li class="list-group-item">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="completada${indice}" ${tarea.completada ? 'checked' : ''} onclick="marcarCompletada(${indice}, this)">
                            <label class="form-check-label" for="completada${indice}">
                                Completada
                            </label>
                        </div>
                    </li>
                </ul>
                <div class="card-body">
                    <button type="button" class="btn btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target="#editarModal" onclick="llenarFormularioEditar(${indice})">
                        <i class="bi bi-pencil-square"></i> Editar
                    </button>
                    <button type="button" class="btn btn-danger" onClick="borrarTarea(${indice})">
                        <i class="bi bi-trash3"></i> Borrar
                    </button>
                </div>
            </div>
        </div>`;
    });
}

function marcarCompletada(indice, checkbox) {
    tareas[indice].completada = checkbox.checked;
}

//agregar una tarea
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarDatos();
    cerrarModal("nuevoModal");
    mostrarTareas();
    formulario.reset();
});

//llenar el formulario de edición
let llenarFormularioEditar = (indice) => {
    document.getElementById("indiceEditar").value = indice;
    document.getElementById("nombreEditar").value = tareas[indice].nombre;
    document.getElementById("fechaEditar").value = tareas[indice].fecha;
    document.getElementById("descripcionEditar").value = tareas[indice].descripcion;
    document.getElementById("imagenUrlEditar").value = tareas[indice].imagen;
    document.getElementById("videoUrlEditar").value = tareas[indice].video;
    document.getElementById("audioUrlEditar").value = tareas[indice].audio;
};

// guardar los cambios de la tarea editada
formularioEditar.addEventListener("submit", (e) => {
    e.preventDefault();
    editarTarea();
    cerrarModal("editarModal");
    mostrarTareas();
});

// agregar datos
let agregarDatos = () => {
    const imagenUrl = document.getElementById("imagenUrl").value;
    const imagenArchivo = document.getElementById("imagenArchivo").files[0];
    let imagen = imagenUrl;
    if (imagenArchivo) {
        imagen = URL.createObjectURL(imagenArchivo);
    }

    tareas.push({
        nombre: document.getElementById("nombre").value,
        fecha: document.getElementById("fecha").value,
        descripcion: document.getElementById("descripcion").value,
        imagen: imagen,
        video: document.getElementById("videoUrl").value,
        audio: document.getElementById("audioUrl").value
    });
};

// editar una tarea
let editarTarea = () => {
    let indice = document.getElementById("indiceEditar").value;
    const imagenUrl = document.getElementById("imagenUrlEditar").value;
    const imagenArchivo = document.getElementById("imagenArchivoEditar").files[0];
    let imagen = imagenUrl;
    if (imagenArchivo) {
        imagen = URL.createObjectURL(imagenArchivo);
    }

    tareas[indice].nombre = document.getElementById("nombreEditar").value;
    tareas[indice].fecha = document.getElementById("fechaEditar").value;
    tareas[indice].descripcion = document.getElementById("descripcionEditar").value;
    tareas[indice].imagen = imagen;
    tareas[indice].video = document.getElementById("videoUrlEditar").value;
    tareas[indice].audio = document.getElementById("audioUrlEditar").value;
};

//borrar una tarea
let borrarTarea = (indice) => {
    if (confirm("¿Estás seguro de eliminar esta tarea?")) {
        tareas.splice(indice, 1);
        mostrarTareas();
    }
};

// cerrar el modal
let cerrarModal = (idModal) => {
    let modal = document.getElementById(idModal);
    let bsModal = bootstrap.Modal.getInstance(modal);
    bsModal.hide();
};

// Mostrar tareas al cargar la página
mostrarTareas();