// home.js

document.addEventListener('DOMContentLoaded', function() {
    // Cargar los proyectos
    const proyectos = [
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
            fecha: "2021-09-04",
            descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
            imagen: "",
            video: "https://youtu.be/OvhVLFQmgOY",
            audio: "",
            completada: false
        },
        {
            nombre: "Proyecto 5",
            fecha: "2021-09-05",
            descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
            imagen: "",
            video: "https://youtu.be/OvhVLFQmgOY",
            audio: "",
            completada: false
        },
        {
            nombre: "Proyecto 6",
            fecha: "2021-09-06",
            descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
            imagen: "",
            video: "https://youtu.be/OvhVLFQmgOY",
            audio: "",
            completada: false
        },
    ];

    const listaTareas = document.getElementById('listaTareas');

    function mostrarTareas() {
        listaTareas.innerHTML = "";
        proyectos.forEach((proyecto, indice) => {
            listaTareas.innerHTML += `
                <div class="col-12 col-md-6 col-lg-4 mb-3">
                    <div class="card bg-dark text-white">
                        <div class="card-body">
                            <h5 class="card-title mb-3 bg-dark" style="color: white; padding: 10px; border-radius: 10px">${proyecto.nombre}</h5>
                            ${proyecto.video ? `<iframe class="card-video mb-2" width="100%" height="200" src="${convertirUrlYouTube(proyecto.video)}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : ''}
                            <div class="mb-3">
                                <h6 class="card-subtitle mb-2 text-muted text-end">${proyecto.fecha}</h6>
                                <p class="card-text">${proyecto.descripcion}</p>
                            </div>
                            <div class="d-flex justify-content-end">
                                <button class="btn btn-primary" onclick="verProyecto(${indice})">Ver</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    mostrarTareas();

    window.verProyecto = function(indice) {
        const proyecto = proyectos[indice];
        localStorage.setItem('proyectoDetalle', JSON.stringify(proyecto));
        window.location.href = 'proyecto.html';
    };

    function convertirUrlYouTube(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length == 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
    }
});


document.addEventListener('DOMContentLoaded', function() {
    mostrarProyectos();

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
});

function mostrarProyectos() {
    const listaTareas = document.getElementById('listaTareas');
    const proyectos = JSON.parse(localStorage.getItem('proyectos')) || [];

    listaTareas.innerHTML = '';
    proyectos.forEach((proyecto, indice) => {
        listaTareas.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 mb-3">
                <div class="card bg-dark text-white">
                    <div class="card-body">
                        <h5 class="card-title mb-3 bg-dark" style="color: white; padding: 10px; border-radius: 10px">${proyecto.nombre}</h5>
                        ${proyecto.imagen ? `<img src="${proyecto.imagen}" class="card-img mb-2" alt="Imagen">` : ''}
                        ${proyecto.video ? `<iframe class="card-video mb-2" width="100%" height="200" src="${convertirUrlYouTube(proyecto.video)}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : ''}
                        ${proyecto.audio ? `<audio controls src="${proyecto.audio}" class="card-audio w-100 mb-2"></audio>` : ''}
                        <div class="mb-3">
                            <h6 class="card-subtitle mb-2 text-muted text-end">${proyecto.fecha}</h6>
                            <p class="card-text">${proyecto.descripcion}</p>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button class="btn btn-primary" onclick="verProyecto(${indice})">Ver</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

function convertirUrlYouTube(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length == 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
}

function verProyecto(indice) {
    localStorage.setItem('proyectoSeleccionado', indice);
    window.location.href = 'proyecto.html';
}





