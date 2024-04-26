let j = 500;
let nombre = "Peyton";
for(let j =10; j<=20; j++){
    console.log(j);
    let nombre = "Denisse";
    console.log("Mi nombre dentro del ciclo es:",nombre);
}

console.log("el valor de j despues del ciclo es:",j);
console.log("Mi nombre fuera del ciclo es:",nombre);

const PI = Math.PI;
console.log(PI);

const persona = { nombre : "Peyton", edad : 20, sexo : "F", casado: true};
console.log(persona);

const persona2 = { 
    nombre : "Denisse",
    edad : 20, sexo : "F", 
    casado: true};

for(let propiedad in persona2 ){
    console.log(propiedad,":",persona2[propiedad]);
}


let marcas = ["Porsche", "Ferrari", "Lamborghini", "Audi"];

let lista = document.getElementById("lista");
lista.innerHTML = "";
for (let marca of marcas){
    console.log(marca);
    lista.innerHTML += `<li>${marca}</li>`;
}


let peliculas = [
    {titulo: "Leaning Tower of Pisa", imagen: "https://i.pinimg.com/564x/f6/8d/12/f68d12883010053c363a19e27b1e66f3.jpg"},
    {titulo: "Trevi Fountain, Roma, Italy", imagen: "https://i.pinimg.com/564x/12/a0/f7/12a0f79fbc046139158300b8dbff41a8.jpg"},
    {titulo: "The Colisseum, Roma, Italy", imagen: "https://i.pinimg.com/564x/93/ad/e4/93ade4d62d97a5dc90c0312a134c778a.jpg"},
    {titulo: "Winged Victory of Samothrace", imagen: "https://i.pinimg.com/564x/70/a1/90/70a190b206afeca909d1784ed4d02c87.jpg"},
    {titulo: "Arco da Rua Augusta", imagen: "https://i.pinimg.com/564x/80/a2/d0/80a2d08e7800d7fc01d37c8a065ace31.jpg"},
    {titulo: "Eiffel Tower, París", imagen: "https://i.pinimg.com/564x/65/55/d7/6555d7eea0223fb6582836b2e676288c.jpg"},
    {titulo: "David, Miguel Angel", imagen: "https://i.pinimg.com/564x/4e/e0/56/4ee05677f392ce8d700f173f0ed9b6f0.jpg"},
    {titulo: "Cupid and Psyche in the Louvre", imagen: "https://i.pinimg.com/564x/b9/82/6c/b9826c12a248db97553450fc098b15b8.jpg"},



];

let galeria = document.getElementById("galeria");
galeria.innerHTML = "";
for (let pelicula of peliculas){
    console.log(pelicula);
    galeria.innerHTML += `<div class='col-12 col-md-3 text-center'><p>${pelicula.titulo}</p><img src='${pelicula.imagen}' alt='Imagen de ${pelicula.titulo}' class='img-fluid'></div>`;
}

