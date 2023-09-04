// Crear un array vacío y generar 10 números al azar
const numerosAzar = [];
for (let i = 0; i < 10; i++) {
  const numero = Math.floor(Math.random() * 100); // Números aleatorios entre 0 y 99
  numerosAzar.push(numero);
}

// Solicitar al usuario un string con palabras separadas por coma
const entradaUsuario = prompt("Ingresa un string con palabras separadas por coma");
const arrayPalabras = entradaUsuario.split(",");

// Encontrar el número menor y el número mayor en el array [10, 40, 30, 20, 15, 5]
const numeros = [10, 40, 30, 20, 15, 5];
numeros.sort((a, b) => a - b);
const numeroMenor = numeros[0];
const numeroMayor = numeros[numeros.length - 1];

// Imprimir resultados en la consola
console.log("Array de números al azar:", numerosAzar);
console.log("Array resultante del usuario:", arrayPalabras);
console.log("Arreglo ordenado de menor a mayor:", numeros);
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);
