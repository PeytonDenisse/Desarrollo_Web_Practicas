document.addEventListener('DOMContentLoaded', function() {
    const indice = localStorage.getItem('proyectoSeleccionado');
    if (indice !== null) {
        const proyectos = JSON.parse(localStorage.getItem('proyectos')) || [];
        const proyecto = proyectos[indice];
        if (proyecto) {
            document.getElementById('tituloProyecto').textContent = proyecto.nombre;
            document.getElementById('fechaProyecto').textContent = proyecto.fecha;
            document.getElementById('descripcionProyecto').textContent = proyecto.descripcion;
            if (proyecto.imagen) {
                document.getElementById('imagenProyecto').innerHTML = `<img src="${proyecto.imagen}" class="card-img mb-2" alt="Imagen">`;
            }
            if (proyecto.video) {
                document.getElementById('videoProyecto').innerHTML = `<iframe class="card-video mb-2" width="100%" height="200" src="${convertirUrlYouTube(proyecto.video)}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            }
            if (proyecto.audio) {
                document.getElementById('audioProyecto').innerHTML = `<audio controls src="${proyecto.audio}" class="card-audio w-100 mb-2"></audio>`;
            }
        }
    }
});

function convertirUrlYouTube(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length == 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
}
