let stock = "100"; // String
let stockNumero = 100; // Número

// Comparación estricta (===) vs no estricta (==)
console.log("Comparación estricta:", stock === stockNumero); // false
console.log("Comparación no estricta:", stock == stockNumero); // true

// Ejemplo de truthy/falsy
let disponible = 0; // 0 es falsy
let colorSeleccionado = "Plata"; // string no vacío es truthy

console.log("Disponible?", !!disponible); // false
console.log("Color seleccionado?", !!colorSeleccionado); // true
