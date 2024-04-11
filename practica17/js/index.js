
let numero = 100; //variable global, entero, numer 
console.log(numero);//muestra el valor de
let decimal =15.5 ; // variable global, decimales
console.log(decimal); 

let texto =  "Hola Mundo"; //Variable global, string 
let texto2 =  "hola mundo";  // Variable global, string
let boolean = true; //Variable Global, tipo Booleanos


let estado = true // variable booleana
let estado2 = false // variable booleana
let arreglo = [1,2,3,4,5]; // variable arreglo
let arreglo2 = ["a", "b","c","d","e"]; //arreglo con strings
let arreglo3 = ["Peyton", "Miguel", "Luis"]; // variable arreglo
let arreglo4 = [1, "Peyton", true]; // variable arreglo con diferentes tipos de datos
let objetos = {nombre: "Peyton", edad: 25}; // variable objeto combinados 

let arregloMixto = [1,2,3, "Peynto",true ]; //Arreglos que contienen varios tipos de dato
arregloMixto[0] = "Hola";
console.log(arregloMixto);

let objeto = {
    nombre: "Juan",
    edad: 30,
    telefono: "123456"
}

console.log(objeto);
console.log(objeto.nombre);

let estudiante = {
    nombre: "Denisse",
    matricula: "78658",
    carrera: "ISSC",
    materias: ["Matematicas", "Programacion", "Ingles", "Base de Datos"],
    amigos: [
        {
        nombre: "Pedro",
        telefono: "123456",

        },
        {
            nombre: "María",
            telefono: "654123"
        }
    ]
}

console.log(estudiante.amigos[1].nombre);

console.log(estudiante.materias[1]);

let variable = 10;
let variable2 = "10.5";
let variable3 = true ;
let variable4 = [1,2,3,4,5];
console.log(typeof variable);
console.log(typeof variable2);
console.log(typeof variable3);
console.log(typeof variable4);

let saludo, nombre = "juan";
console.log(`Hola ${nombre}`);