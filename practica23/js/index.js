let resultado = document.getElementById('resultado');

let asignar = (valor)=> resultado.value += valor 

let calcular= () => {resultado.value = eval(resultado.value);
    if(resultado.value != '')
        resultado.value = eval(resultado.value);
    else
        alert("Ingrese un valor");
}

let limpiar  = () => resultado = '';

//Hacer calculadora cientifica ---3 operaciones 