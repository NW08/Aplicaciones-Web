// Función que retorna diferentes tipos de datos según la información del producto que se quiera consultar.
const obtenerInfoMonitor = (consulta) => {

    // Retorna un string // Nombre del producto
    if (consulta === "nombre") {
        return "Monitor de escritorio para videojuegos, pantalla IPS de 24 pulgadas, FHD";
    }

    // Retorna un número - Precio según la cantidad de unidades disponibles
    if (consulta === "precio") {
        return 58;
    }

    // Retorna un booleano - ¿Tiene personalización disponible?
    if (consulta === "personalización") {
        return true;
    }

    // Retorna un objeto con las especificaciones completas del producto
    if (consulta === "especificaciones") {
        return {
            tamaño: "24 pulgadas",
            resolucion: "1920 x 1080",
            tipo: "IPS FHD",
            precioMuestra: 72,
            verificado: true
        };
    }

    // Retorna un arreglo - Opciones de personalización
    if (consulta === "opciones") {
        return [
            "Logotipo personalizado (min: 500 unidades)",
            "Embalaje personalizado (min: 500 unidades)",
            "Personalización gráfica (min: 500 unidades)"
        ];
    }

    // Retorna otra función para calcular precio por cantidad
    if (consulta === "calcularPrecio") {
        return function(cantidad) {
            if (cantidad >= 2000) return cantidad * 46;
            if (cantidad >= 5) return cantidad * 58;
            return "Cantidad mínima: 5 unidades";
        };
    }

    // Por defecto retorna un null si no se encuentra la consulta
    return null;
};

console.log(obtenerInfoMonitor("nombre"));
console.log(obtenerInfoMonitor("precio"));
console.log(obtenerInfoMonitor("personalizacion"));
console.log(obtenerInfoMonitor("especificaciones"));
console.log(obtenerInfoMonitor("opciones"));
console.log(obtenerInfoMonitor("calcularPrecio")(10));
console.log(obtenerInfoMonitor("otro"));