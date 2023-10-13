function actualizarReloj() {
    const reloj = document.getElementById('clock');
    const ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    let ampm = 'AM';

    // Formatea las horas y el AM/PM
    if (horas >= 12) {
        ampm = 'PM';
        if (horas > 12) {
            horas -= 12;
        }
    }

    // Añade un 0 delante si son de un solo dígito
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    // Actualiza el contenido del reloj
    reloj.textContent = `${horas}:${minutos}:${segundos} ${ampm}`;
}

// Actualiza el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Llama a la función para mostrar la hora actual
actualizarReloj();
