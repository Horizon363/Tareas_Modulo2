// Ejercicio 1
const numeroUsuario = prompt("Ingresa un número");
const numero = parseInt(numeroUsuario);

if (!isNaN(numero)) {
  console.log(`Múltiplos de 5 hasta ${numero}:`);
  for (let i = 1; i <= numero; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
} else {
  console.log("Debes ingresar un número válido.");
}


// Ejercicio 2
const num1 = parseInt(prompt("Ingresa el primer número (entre 1 y 50)"));
const num2 = parseInt(prompt("Ingresa el segundo número (entre 1 y 50)"));

if (!isNaN(num1) && !isNaN(num2) && num1 >= 1 && num1 <= 50 && num2 >= 1 && num2 <= 50) {
  for (let i = 1; i <= 50; i++) {
    if (i === num1 || i === num2) {
      console.log(`¡Lotería! - ${i}`);
    } else {
      console.log(i);
    }
  }
} else {
  console.log("Debes ingresar dos números válidos entre 1 y 50.");
}


// Ejercicio 3
const numerosCapturados = [];

while (true) {
  const numero = parseInt(prompt("Ingresa un número (introduce 0 para terminar)"));
  
  if (numero === 0) {
    break; // Terminar la captura si se ingresa 0
  }
  
  if (!isNaN(numero)) {
    numerosCapturados.push(numero);
  } else {
    console.log("Debes ingresar un número válido.");
  }
}

console.log("Números capturados:", numerosCapturados);


// Ejercicio 4
const palabrasCapturadas = [];

while (true) {
  const palabra = prompt("Ingresa una palabra (deja vacío para terminar)");
  
  if (palabra === "") {
    break; // Terminar la captura si se deja vacío
  }
  
  palabrasCapturadas.push(palabra);
}

const resultado = palabrasCapturadas.join(" ");
console.log("Palabras capturadas:", resultado);


// Ejercicio 5
while (true) {
    const diaSemana = prompt("Ingresa un día de la semana (en minúsculas)");
  
    switch (diaSemana) {
      case "lunes":
        alert("Es lunes");
        break;
      case "domingo":
        alert("Ve a descansar");
        return; // Terminar la captura de información
      default:
        alert(`Es ${diaSemana}`);
        break;
    }
  }
  