let pantalla = document.getElementById('pantalla');
let historial = [];
const maxHistorial = 5;

let asignar = (valor) => {
  if (valor === 'DEL') {
    pantalla.value = pantalla.value.slice(0, -1); 
  } else if (valor === 'π') {
    pantalla.value += Math.PI.toFixed(4); 
  } else if (valor === 'e') {
    pantalla.value += Math.E.toFixed(4); 
  } else if (valor === '%') {
    let expresion = pantalla.value;
    let porcentaje = eval(expresion) / 100; 
    pantalla.value = porcentaje.toString();
  } else if (valor === 'x!') {
    let expresion = pantalla.value;
    let numero = eval(expresion);
    let resultado = factorial(numero);
    pantalla.value = resultado.toString();
  } else {
    pantalla.value += valor;
  }
};

let factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

let procesarExpresion = (expresion) => {
  expresion = expresion.replace(/(\d+)\(/g, '$1*(');
  expresion = expresion.replace(/%/g, '*0.01');
  return expresion;
};

let calcular = () => {
  let expresion = pantalla.value;

  if (expresion !== '') {
    expresion = procesarExpresion(expresion);
    expresion = expresion.replace(/sin/g, 'Math.sin');
    expresion = expresion.replace(/cos/g, 'Math.cos');
    expresion = expresion.replace(/tan/g, 'Math.tan');
    expresion = expresion.replace(/\^/g, '**');
    
    let resultado = eval(expresion);
    pantalla.value = resultado;
    historial.push(expresion + " = " + resultado);
    actualizarHistorial();
  } else {
    alert("Ingrese un valor");
  }
};

let limpiar = () => {
  pantalla.value = '';
};

let actualizarHistorial = () => {
  let historialDiv = document.getElementById('historial');
  historialDiv.innerHTML = '';
  historial.slice(-maxHistorial).forEach((operacion, index) => {
      let p = document.createElement('p');
      p.textContent = `Operación ${index + 1}: ${operacion}`;
      historialDiv.appendChild(p);
  });
};

let agregarAlHistorial = (operacion) => {
  historial.push(operacion);
  if (historial.length > maxHistorial) {
      historial.shift();
  }
  actualizarHistorial();
};