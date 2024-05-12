const fruits = ["apple", "orange", "banana", "kiwi"]

let size = fruits.length;
console.log(size);

let contenido = "";
for (let i = 0; i < size; i++){
    console.log(fruits[i]);
    contenido += fruits[i]+ ",";
}


let lista1 = document.getElementById("lista1");

lista1.innerHTML = contenido;

console.log(lista1);
console.warn("la fruta es", fruits)
console.error("la fruta es", fruits)
console.info("la fruta es", fruits)
console.table("la fruta es", fruits)
console.debug("la fruta es", fruits)


let lista2 = document.getElementById("lista2");
lista2.innerHTML = fruits.join(",");


let lista3 = document.getElementById("lista3");
fruits.pop(fruits);//elimina o quita el ultimo elemento del arreglo 
console.log(fruits);
lista3.innerHTML = "lista3: " + fruits.join("--")

let lista4 = document.getElementById("lista4"); 
fruits.shift("mango"); 
lista4.innerHTML = "lista4" + fruits.join('--')

let lista5 = document.getElementById("lista5");
fruits.push("melon");//
fruits.push("mango"); 
lista4.innerHTML = "lista4" + fruits.join('--')

let lista6 = document.getElementById("lista6");
fruits.unshift("Pera");//
fruits.unshift("Uva"); 
lista4.innerHTML = "lista6" + fruits.join('--')

const nombreMujeres = ["Greys","Denisse","Saray"];
const nombreHombres = ["Juan", "Luis","Pedro", "Edwin"];
let listaNombres = nombreMujeres.concat(nombreHombres);
console.log (listaNombres);
let lista7 = document.getElementById("lista7");
lista7.innerHTML = "Lista de nombres:" + listaNombres.join(" , ");
