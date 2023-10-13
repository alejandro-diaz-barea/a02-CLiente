// Obtener el nombre y apellidos del usuario
const nombreCompleto = prompt("Ingrese su nombre y apellidos:");
const nombreArray = nombreCompleto.split(" ");
const nombre = nombreArray[0];
const apellido1 = nombreArray[1];
const apellido2 = nombreArray[2] || "";

// Calcular longitud, minúsculas y mayúsculas
const longitudNombreCompleto = nombreCompleto.replace(/\s/g, "").length;
const nombreMinusculas = nombreCompleto.toLowerCase();
const nombreMayusculas = nombreCompleto.toUpperCase();

// Generar propuestas de nombre de usuario
const propuesta1 = `${nombre.charAt(0)}${apellido1}${apellido2.charAt(0)}`;
const propuesta2 = `${nombre.slice(0, 3).charAt(0).toUpperCase()}${apellido1}${apellido2}`;

// Mostrar los resultados en la página
document.write(`Longitud total del nombre y apellidos: ${longitudNombreCompleto} <br>`);
document.write(`Nombre en minúsculas: ${nombreMinusculas} <br>`);
document.write(`Nombre en mayúsculas: ${nombreMayusculas} <br>`);
document.write(`Nombre: ${nombre} <br>`);
document.write(`Apellido 1: ${apellido1} <br>`);
document.write(`Apellido 2: ${apellido2} <br>`);
document.write(`Propuesta de nombre de usuario 1: ${propuesta1} <br>`);
document.write(`Propuesta de nombre de usuario 2: ${propuesta2} <br>`);
