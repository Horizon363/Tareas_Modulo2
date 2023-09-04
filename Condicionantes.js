// Ejercico 1 
const respuesta = prompt("¿Eres bellisimo/a?");
if (respuesta.toLowerCase() === "sí") {
  alert("Ciertamente");
} else if (respuesta.toLowerCase() === "no") {
  alert("No te creo");
} else {
  alert("Respuesta no válida");
}


// Ejercicio 2
const numero = prompt("Ingresa un número");
if (numero % 2 === 0) {
  alert(`${numero} es divisible entre 2`);
} else {
  alert(`${numero} no es divisible entre 2`);
}


// Ejercicio 3
const numero = prompt("Ingresa un número");
if (numero % 2 === 0) {
  alert(`${numero} es un número par`);
} else {
  alert(`${numero} no es un número par`);
}


// Ejercico 4
const numeroCliente = prompt("Ingresa un número de cliente");
if (numeroCliente == 1000) {
  alert("Ganaste un premio");
} else {
  alert(`Lo sentimos, sigue participando. Tu número de cliente es ${numeroCliente}`);
}


// Ejercico 5
const numero1 = prompt("Ingresa el primer número");
const numero2 = prompt("Ingresa el segundo número");

if (numero1 < numero2) {
  alert(`${numero1} es menor que ${numero2}`);
} else {
  alert(`${numero2} es menor que ${numero1}`);
}


// Ejercicio 6
const numero1 = prompt("Ingresa el primer número");
const numero2 = prompt("Ingresa el segundo número");
const numero3 = prompt("Ingresa el tercer número");

if (numero1 >= numero2 && numero1 >= numero3) {
  alert(`${numero1} es el número mayor`);
} else if (numero2 >= numero1 && numero2 >= numero3) {
  alert(`${numero2} es el número mayor`);
} else {
  alert(`${numero3} es el número mayor`);
}


// Ejercicio 7
const diaSemana = prompt("Ingresa un día de la semana");

if (diaSemana.toLowerCase() === "lunes") {
  alert("Es lunes");
} else if (diaSemana.toLowerCase() === "viernes") {
  alert("Es viernes");
} else if (diaSemana.toLowerCase() === "sábado" || diaSemana.toLowerCase() === "domingo") {
  alert("Es fin de semana");
} else {
  alert("Es otro día de la semana");
}


// Ejercicio 8
const calificacion = prompt("Ingresa una calificación (entre 1 y 10)");

if (calificacion >= 1 && calificacion <= 10) {
  if (calificacion < 6) {
    alert("Reprobado");
  } else if (calificacion <= 8) {
    alert("Regular");
  } else if (calificacion === 9) {
    alert("Bien");
  } else if (calificacion === 10) {
    alert("Excelente");
  }
} else {
  alert("Calificación no válida");
}


// Ejercicio 9
const topping = prompt("Elige un topping: oreo, KitKat o brownie");
const precioBase = 50;

switch (topping.toLowerCase()) {
  case "oreo":
    alert(`El precio total es ${precioBase + 10} MXN`);
    break;
  case "kitkat":
    alert(`El precio total es ${precioBase + 15} MXN`);
    break;
  case "brownie":
    alert(`El precio total es ${precioBase + 20} MXN`);
    break;
  default:
    alert("No tenemos este topping, lo sentimos. El precio del helado sin topping es 50 MXN");
}


// Ejercico 10
const curso = prompt("Elige un curso: Course, Carrera o Master");
const precioMensual = {
  Course: 4999,
  Carrera: 3999,
  Master: 2999,
};

const beca = prompt("¿Tienes una beca? (Facebook, Google, Jesua)");

if (curso in precioMensual) {
  let precioConDescuento = precioMensual[curso];
  switch (beca.toLowerCase()) {
    case "facebook":
      precioConDescuento *= 0.8; // 20% de descuento
      break;
    case "google":
      precioConDescuento *= 0.85; // 15% de descuento
      break;
    case "jesua":
      precioConDescuento *= 0.5; // 50% de descuento
      break;
    default:
      break;
  }
  const duracion = {
    Course: 2,
    Carrera: 6,
    Master: 12,
  };
  const precioTotal = precioConDescuento * duracion[curso];
  alert(`Precio mensual con descuento: ${precioConDescuento} MXN`);
  alert(`Precio total por el curso: ${precioTotal} MXN`);
} else {
  alert("Curso no válido");
}


// Ejercicio 11
const tipoVehiculo = prompt("Ingresa el tipo de vehículo (coche, moto o autobús)");
const precioKilometro = {
  coche: 0.20,
  moto: 0.10,
  autobús: 0.5,
};

const litrosConsumidos = parseFloat(prompt("Ingresa la cantidad de litros consumidos"));

let costoTotal = precioKilometro[tipoVehiculo] * litrosConsumidos;

if (litrosConsumidos <= 100) {
  costoTotal += 5;
} else {
  costoTotal += 10;
}

alert(`El costo total a pagar es: ${costoTotal} MXN`);
