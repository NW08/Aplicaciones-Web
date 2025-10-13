// Optional chaining (Encadenamiento Opcional): permite acceder a una propiedad anidada sin tener que validar si existe

// EJERCICIO
// 1. Crea un objeto llamado infoDiscoPesas con la siguiente información del producto: nombre, precio, color, material y proveedor
// (objeto anidado con: nombre y país).
// 2. Mostrar el nombre del proveedor usando Optional Chaining (?.) y el operador Nullish Coalescing (??) para mostrar <<Sin código>>.
// si el proveedor no tiene un código asignado.
const infoDiscoPesas = {
    nombre: "Discos de Pesas de 25 KG",
    precio: 2.10,
    color: "Rojo",
    material: "Hierro fundido",
    proveedor: {
        nombre: "Hebei Shuaizool",
        pais: "CN"
    }
}

console.log(`El nombre del proveedor es: ${infoDiscoPesas.proveedor?.nombre}`)
console.log("Codigo del proveedor: ")
console.log(infoDiscoPesas.proveedor?.codigo ?? "Sin codigo")