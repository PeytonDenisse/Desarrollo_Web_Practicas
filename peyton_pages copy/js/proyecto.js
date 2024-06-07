document.addEventListener('DOMContentLoaded', function() {
    const proyecto = JSON.parse(localStorage.getItem('proyectoDetalle'));

    if (proyecto) {
        document.getElementById('proyectoNombre').textContent = proyecto.nombre;
        document.getElementById('proyectoFecha').textContent = proyecto.fecha;
        document.getElementById('proyectoDescripcion').textContent = proyecto.descripcion;

        if (proyecto.video) {
            document.getElementById('proyectoVideo').src = convertirUrlYouTube(proyecto.video);
            document.getElementById('proyectoVideo').style.display = 'block';
        } else {
            document.getElementById('proyectoVideo').style.display = 'none';
        }

        if (proyecto.imagen) {
            document.getElementById('proyectoImagen').src = proyecto.imagen;
            document.getElementById('proyectoImagen').style.display = 'block';
        } else {
            document.getElementById('proyectoImagen').style.display = 'none';
        }

        if (proyecto.audio) {
            document.getElementById('proyectoAudio').src = proyecto.audio;
            document.getElementById('proyectoAudio').style.display = 'block';
        } else {
            document.getElementById('proyectoAudio').style.display = 'none';
        }
    }

    document.getElementById('backButton').addEventListener('click', function() {
        window.history.back();
    });

    function convertirUrlYouTube(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length == 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
    }
});
