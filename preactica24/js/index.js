let formulario = document.getElementById("formularioAgregar");
let nombre = document.getElementById("nombre");
let fecha = document.getElementById("fecha");
let descripcion = document.getElementById("descripcion");
let listaTareas = document.getElementById("listasTareas")

let tareas = [
    {
        nombre: "Pedro",
        fecha: "2021-09-01",
        descripcion: "Es un mapache"
    },
    {
        nombre: "Bruno",
        fecha: "2021-09-02",
        descripcion: "Chihuahua"
    },
    {
        nombre: "Paco",
        fecha: "2021-09-03",
        descripcion: "Shiba Inu"
    
    }
];

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); //evitar que se recarque la pagina 
    agregarDatos();
});

let agregarDatos = () =>{
    console.log("entró a la función agregar datos");
    tareas.push({
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value

    })
    tareas.push(tareas);
    console.log(tareas);
}

let mostrarTareas = () => {
    listaTareas.innerHTML = ""
    tareas.forEach((tarea,indice) => {
        listaTareas.innerHTML += `
        <div class="row">
            <div class="col-3 border p-3">
                <strong>${tarea.nombre}</strong>
            </div>
            <div class="col-3 border p-3">
                <strong>${tarea.fecha}</strong>
             </div> 
             <div class="col-3 border p-3">
                <strong>${tarea.descripcion}</strong>
            </div>
            <div class="col-3 border p-3 text center">
                <button class="btn btn-outline-primary">Editar</button>
                <button class="btn btn-danger">Borrar</button>
            </div>
        
        `;

    });

}

mostrarTareas();

