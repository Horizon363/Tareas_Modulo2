// Ejercicio 1
console.log("Números impares del 1 al 50:");
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Ejercicio 2
const numeroUsuario = parseInt(prompt("Ingresa un número"));
const pokemons = [
  "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon",
  "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie",
  // ... otros nombres de Pokémon ...
];

if (!isNaN(numeroUsuario)) {
  console.log(`Nombres de Pokémons cuyos números son múltiplos de 5 hasta ${numeroUsuario}:`);
  for (let i = 1; i <= numeroUsuario && i <= pokemons.length; i++) {
    if (i % 5 === 0) {
      console.log(pokemons[i - 1]);
    }
  }
} else {
  console.log("Debes ingresar un número válido.");
}


// Ejercicio 3
const arregloMixto = [4, "dos", 8, "tres", 5, 9, 1, "cero"];
console.log("Elementos numéricos del arreglo:");
for (let i = 0; i < arregloMixto.length; i++) {
  if (typeof arregloMixto[i] === "number") {
    console.log(arregloMixto[i]);
  }
}
