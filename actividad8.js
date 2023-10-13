function comprobarCookies() {
    const nombre = getCookie("nombre");
    const direccion = getCookie("direccion");
    const edad = getCookie("edad");
    const profesion = getCookie("profesion");

    if (nombre && direccion && edad && profesion) {
        mostrarDatos(nombre, direccion, edad, profesion);
        borrarCookies();
    } else {
        pedirDatosCookies();
    }
}

function comprobarLocalStorage() {
    const nombre = localStorage.getItem("nombre");
    const direccion = localStorage.getItem("direccion");
    const edad = localStorage.getItem("edad");
    const profesion = localStorage.getItem("profesion");

    if (nombre && direccion && edad && profesion) {
        mostrarDatos(nombre, direccion, edad, profesion);
        localStorage.clear();
    } else {
        pedirDatosLocalStorage();
    }
}

function getCookie(nombre) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === nombre) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

function pedirDatosCookies() {
    const nombre = prompt("Ingresa tu nombre:");
    const direccion = prompt("Ingresa tu dirección:");
    const edad = prompt("Ingresa tu edad:");
    const profesion = prompt("Ingresa tu profesión:");

    document.cookie = `nombre=${encodeURIComponent(nombre)}`;
    document.cookie = `direccion=${encodeURIComponent(direccion)}`;
    document.cookie = `edad=${encodeURIComponent(edad)}`;
    document.cookie = `profesion=${encodeURIComponent(profesion)}`;

    mostrarDatos(nombre, direccion, edad, profesion);
}

function pedirDatosLocalStorage() {
    const nombre = prompt("Ingresa tu nombre:");
    const direccion = prompt("Ingresa tu dirección:");
    const edad = prompt("Ingresa tu edad:");
    const profesion = prompt("Ingresa tu profesión:");

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("direccion", direccion);
    localStorage.setItem("edad", edad);
    localStorage.setItem("profesion", profesion);

    mostrarDatos(nombre, direccion, edad, profesion);
}

function mostrarDatos(nombre, direccion, edad, profesion) {
    const datos = document.getElementById("datos");
    datos.innerHTML = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Dirección:</strong> ${direccion}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Profesión:</strong> ${profesion}</p>
    `;
}

function borrarCookies() {
    document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "direccion=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "edad=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "profesion=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}