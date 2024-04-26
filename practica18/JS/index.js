/*Operadores logicos  */

let a = 10;
let b = 20;

let suma = a + b;
console.log(suma);
let resta = a - b;
console.log(resta);
let multiplicacion = a * b;
console.log(multiplicacion);
let division = a / b;
console.log(division);
let modulo = a % b;
console.log("El residuo de a%b es ",modulo);

let mayor = a > b;
console.log("a es mayor que b",mayor);
let menor = a < b;
console.log("a es menor que b",menor);
let igual = a <= b;
console.log("a es menor o igual que b",igual);
igual = a == b; 
console.log("a es igual que b",igual);
let diferente = a != b;
console.log("a es diferente que b",diferente);

a  = -50;
b = 10*(-1);

if(a!=b){
    console.log("a es diferente que b");
}else{
    console.log("a es igual que b");
}

// Operadores termario 

let comparacion = a > b ? "a es mayor que b" : "a es menor que b";
console.log(comparacion);

let x = 100;
let y = 200;

function multiplicarNUmeros (m,n){
    return m * n;
}

let resultado = multiplicarNUmeros(x,y);


let dia = "viernes"

if (dia != "Domingo") {
    console.log("No es domingo");
} else {
    console.log("Es domingo");
}


function calcularAreaCirculo (radio) {
    const PI = 3.1416;
    let area = PI * (radio * radio);
    return area
}

console.log(calcularAreaCirculo(10));



function calcularAreaCirculo2 (radio) {
    
    let area2 = Math.PI * Math.pow(radio,2);
    return area2
}

console.log(calcularAreaCirculo2(10));

function toCelsious(farenheit){
    return (5/9) * (farenheit - 32);
}

let temp = toCelsious(77);
console.log("Temperatura"+temp+"°C");

function dobleEdad(edad){
    let Miedad = edad * 2;
    return Miedad;
}
console.log("La edad del niño es "+dobleEdad(29));



//funcion flecha ddobleEdad

let dobleEdad2 = (edad) => edad * 2;
console.log("La edad es "+dobleEdad2(29));



 let hello = function(){
     return "Hello World!";
 }
 console.log(hello());

 let hello2 = () => {
    return "Hello World! con funcion flecha";
 }


