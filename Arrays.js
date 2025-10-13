// Arrays
// Array principal: 7 subproductos del reloj mecánico (variaciones de lujo en acero inoxidable)
let subproductosReloj = [
    "Reloj Clásico Dorado",
    "Reloj Deportivo Plata",
    "Reloj Minimalista Blanco",
    "Reloj Elegante Azul",
    "Reloj Automático Dorado Mate",
    "Reloj Vintage Plata Brillante",
    "Reloj Moderno Blanco Perla"
];

// Array de 8 colores disponibles (variaciones entre dorado, plata, blanco y azul)
let coloresReloj = [
    "Dorado Brillante",
    "Plata Pulida",
    "Blanco Perla",
    "Azul Marino",
    "Dorado Mate",
    "Plata Oscura",
    "Blanco Níveo",
    "Azul Claro"
];

// Primera forma de recorrer el arreglo (forEach: pasa por cada subproducto e imprime su nombre)
subproductosReloj.forEach((reloj) => console.log(`Subproducto: ${reloj}`));

// Segunda forma de recorrer el arreglo (for...of: similar, pero más directo para listas simples)
console.log("\n--- Recorrido con for...of ---");
for (const reloj of subproductosReloj) {
    console.log(reloj);
}

// Comprobaciones (ternario: verífica si hay subproductos disponibles)
subproductosReloj.length >= 0
    ? console.log("\nProceder con el pedido de relojes...")
    : console.log("\nCatálogo de subproductos vacío");

// Desestructuración de arreglos (saca los primeros 7 subproductos en variables individuales)
let [reloj1, reloj2, reloj3, reloj4, reloj5, reloj6, reloj7] = subproductosReloj;
console.log("\nPrimer subproducto: " + reloj1);  // Muestra <<Reloj Clásico Dorado>>

// SPREAD OPERATOR Arrays (combina subproductos y colores en un catálogo completo)
let catalogoCompleto = [...subproductosReloj, ...coloresReloj];
console.log("\n--- Catálogo completo (subproductos + colores) ---");
console.log(catalogoCompleto);  // Array de 15 elementos

// Métodos (usa un array de inventario con 10 ítems mixtos de relojes y accesorios relacionados)
let inventarioRelojes = [
    "Reloj Dorado Clásico",
    "Correa Plata Ajustable",
    "Reloj Blanco Minimalista",
    "Caja Azul de Almacenamiento",
    "Reloj Dorado Automático",
    "Esfera Plata Vintage",
    "Reloj Blanco Elegante",
    "Bisel Azul Marino",
    "Reloj Dorado Mate",
    "Carcasa Plata Pulida"
];

inventarioRelojes.push("Accesorio Blanco Perla");  // Agrega al final (ahora 11 ítems)
inventarioRelojes.unshift("Caja de Regalo Dorado");  // Agrega al inicio (ahora 12 ítems)
inventarioRelojes.pop();  // Elimina el último (<<Carcasa Plata Pulida>> original se mueve)
inventarioRelojes.shift();  // Elimina el primero (<<Reloj Dorado Clásico>>)
console.log("\n--- Inventario después de agregar/eliminar ---");
console.log(inventarioRelojes);  // Muestra el array actualizado

console.log("\n");

// Encontrar elementos (find: busca el primer reloj dorado)
console.log("\n--- Encontrar un subproducto ---");
console.log(inventarioRelojes.find((item) => item.includes("Dorado")));  // Encuentra <<Reloj Dorado Automático>>

// Incluye elementos (includes: verifica si existe un color específico)
console.log("\n--- Verificar si incluye ---");
console.log(inventarioRelojes.includes("Reloj Blanco Minimalista"));  // true

// Filtrar elementos (filter: selecciona ítems que empiecen con “Reloj” y contengan colores)
console.log("\n--- Filtrar relojes con colores ---");

// Lista filtrada, ej: ["Reloj Dorado Automático", "Esfera Plata Vintage"]
console.log(inventarioRelojes.filter((item) => item.startsWith("Reloj") && item.includes("Dorado") || item.includes("Plata")));

// Map (para transformar, como en React: convierte nombres a mayúsculas para un catálogo en negrita)
console.log("\n--- Map: Nombres en mayúsculas ---");
console.log(inventarioRelojes.map((item) => item.toUpperCase()));  // ["CORREA PLATA AJUSTABLE", etc.]

console.log("\n--- Inventario original actualizado ---");
console.log(inventarioRelojes);  // Muestra el array final
