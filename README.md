# README.md

## Descripción
Esta es una página web simple y dinámica construida con HTML, CSS (Bootstrap 5) y JavaScript. Muestra una galería de 8 memes aleatorios cargados desde la API de Imgflip (usando clonación de plantillas y fetch asíncrono), y un sticker/GIF único de "Goku" obtenido de la API de Giphy. Ideal como prueba de integración de APIs externas como parte de la materia de Desarrollo de Aplicaciones Web.

## Tecnologías Usadas
- **HTML5 & CSS3**: Estructura y estilos base.
- **Bootstrap 5**: Grid responsive, componentes UI (rows, cols, shadows, etc.).
- **JavaScript ES6+**: Fetch asíncrono, manipulación DOM (querySelector, cloneNode, appendChild), manejo de errores con try-catch.
- **APIs Externas**: Imgflip (memes) y Giphy (stickers/GIFs, requiere API key gratuita).
- **Despliegue**: GitHub Pages y Netlify (estático, HTTPS).

## Cómo Funciona
1. **Memes**: La función `obtenerMemes()` hace fetch a Imgflip, clona una plantilla HTML (#meme), actualiza las URLs de imágenes en 8 clones, los agrega a un contenedor (#list-memes) y remueve la plantilla original.
2. **GIF/Sticker**: La función `obtenerGif()` busca en Giphy, extrae la URL del primer resultado y la asigna directamente a una `<img>` en la plantilla (#gif).
3. **Carga**: Ambas funciones se ejecutan automáticamente al cargar la página. El sitio es ligero y se actualiza sin recarga.

## Instalación y Uso Local
1. Clona el repositorio: `git clone <tu-repo-url>`.
2. Abre `index.html` en un navegador (o usa un servidor local como Live Server en VS Code).
3. Reemplaza la API key de Giphy en `datosGift.js` (obtén una gratis en [developers.giphy.com](https://developers.giphy.com/)).
4. Funciona offline para la estructura, pero necesita internet para las APIs.

## Enlaces de Producción
- **Netlify**: [https://aw-lab-apitest.netlify.app/](https://aw-lab-apitest.netlify.app/)
- **GitHub Pages**: [https://nw08.github.io/Aplicaciones-Web/](https://nw08.github.io/Aplicaciones-Web/)  <!-- Reemplaza con tu enlace real -->

## ESCUELA POLITÉCNICA NACIONAL
### GR1, Ortiz Josué, Ganchala Eduardo, Girón María Paula
