
let lista = document.getElementById("lista");
let texto = "Hola mi nombre es Denisse";
console.log(texto);

lista.innerHTML = texto;

texto = 'otra cadena';

texto = `esta es otra forma `;

let text = `La Salle Bajío 
Ing Software y Sistemas Computacionales
Grupo 301
Práctica 21`;

console.log(text);


let a = 5;
let b = 10;
let resultado = `El resultado de la suma de ${a} + ${b} es ${a+b}
<ul>
    <li>resta : ${a-b}</li>
    <li>multiplicacion : ${a*b}</li>
    <li>division  : ${a/b}</li>
</ul>`;

console.log(resultado);
lista.innerHTML = resultado; 


let persona = `Edwin`;
let edad = 20;

function miFuncion(cadena, personaX, edadExp){
    let resultados = ``;
    //cadena += personaX +" "+ "tiene una edad de:"+ " "+ edadExp; + "años";

    resultados = `${cadena}${personaX} tiene una edad de ${edadExp} años`
    console.log(resultados);
    return resultados;

}

miFuncion("Nombre:",persona, "Edad:", edad);

//let resultado2 = miFuncion `Hola ${cadena }${persona} tienes una edad ${edad} años`
//console.log(resultado2);


function mostrarNombre(name){
    console.log(name);
    return name;
}

let resultado2 = mostrarNombre`${persona}`;

let titulo = "Ganadores de los Oscaras 2024"
let cantantes = ["Billie Eilish", "Lady Gaga", "Adele"];
let cadenaHTML = `<h1>${titulo}</h1>`;

cadenaHTML += `<ul>`;
for(let cantante of cantantes ){
    cadenaHTML += `<li >${cantante}</li>`;
}

cadenaHTML += `<ul>`;

lista.innerHTML = cadenaHTML;


function otraFuncion(){
    
}


