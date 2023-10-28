function mostrarHora() {
    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    const horaActual = `${agregarCero(hora)}:${agregarCero(minutos)}:${agregarCero(segundos)}`;
    console.log(horaActual);
}

function agregarCero(tiempo) {
    if (tiempo < 10) {
        return "0" + tiempo;
    }
    return tiempo;
}

// Actualizar la hora cada segundo
setInterval(mostrarHora, 1000);

// Mostrar la hora al cargar el script
mostrarHora();
