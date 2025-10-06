const obtenerGif = async () => {
    try {
        const request = await fetch("https://api.giphy.com/v1/stickers/search?" +
            "api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&q=Goku");
        const respuesta = await request.json();
        const gifUrl = respuesta.data[0].images.original.url;
        const img = document.querySelector('#gif img');
        img.src = gifUrl;
        img.alt = "Gif aleatorio";
    } catch (error) {
        console.log("Error al obtener el GIF:", error);
        // Opcional: podrías agregar un mensaje de error en el DOM aquí
    }
};

obtenerGif();  // Ejecuta la función automáticamente