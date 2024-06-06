document.addEventListener('DOMContentLoaded', function() {
    const proyecto = JSON.parse(localStorage.getItem('proyectoActual'));
    if (proyecto) {
        const proyectoContainer = document.getElementById('proyecto');
        proyectoContainer.innerHTML = `
            <div class="col-12">
                <div class="card bg-dark text-white">
                    <div class="card-body">
                        <h5 class="card-title mb-3 bg-dark" style="color: white; padding: 10px; border-radius: 10px">${proyecto.nombre}</h5>
                        ${proyecto.imagen ? `<img src="${proyecto.imagen}" class="card-img mb-2" alt="Imagen">` : ""}
                        ${proyecto.video ? `<iframe class="card-video mb-2" width="100%" height="400" src="${convertirUrlYouTube(proyecto.video)}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : ""}
                        ${proyecto.audio ? `<audio controls src="${proyecto.audio}" class="card-audio w-100 mb-2"></audio>` : ""}
                        <div class="mb-3">
                            <h6 class="card-subtitle mb-2 text-muted text-end">${proyecto.fecha}</h6>
                            <p class="card-text">${proyecto.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        const proyectoContainer = document.getElementById('proyecto');
        proyectoContainer.innerHTML = '<p class="text-center text-white">No se encontró el proyecto.</p>';
    }
});

// Función para convertir URL de YouTube a formato embed
function convertirUrlYouTube(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length == 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
}
