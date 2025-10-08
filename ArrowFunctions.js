// FORMA 1: Se usa cuando necesitas ejecutar varias líneas de código

// Mostrar la información general del producto
const obtenerInfoProducto = () => {
    const nombre = "Samsung Galaxy S25+"
    const sistemaOperativo = "Android 15"
    const precio = 699.99
    return `${nombre} con ${sistemaOperativo} - Precio: $${precio}`
}

console.log("FORMA 1");
console.log(obtenerInfoProducto());
console.log("----------------------------------------")

// FORMA 2: Función flecha de una línea (return implícito)
// Se usa cuando la función tiene una sola expresión

// Mostrar el modelo del producto y la capacidad de almacenamiento
const obtenerModelo = () => "Samsung Galaxy S25+"

console.log("FORMA 2 - Función de una línea:");
console.log(obtenerModelo());


const obtenerAlmacenamiento = () => "256 GB"

console.log(`Almacenamiento: ${obtenerAlmacenamiento()}`);
console.log("----------------------------------------")

// FORMA 3: Función flecha con paréntesis (return explícito con paréntesis)
// Se usa cuando quieres ser más explícito sobre el valor de retorno

// Mostrar las especificaciones del celular
const obtenerEspecificacionesCelular = () => ("Procesador: Snapdragon 8 Elite")

console.log("FORMA 3 - Función con paréntesis:");
console.log(obtenerEspecificacionesCelular());

const obtenerCapacidadBateria = () => ("Batería: 4900 mAh")

console.log(obtenerCapacidadBateria());