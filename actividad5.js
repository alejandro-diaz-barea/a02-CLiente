// Recetas iniciales
const recetas = [
    { nombre: "Receta 1", explicacion: "Instrucciones para Receta 1" },
    { nombre: "Receta 2", explicacion: "Instrucciones para Receta 2" },
    { nombre: "Receta 3", explicacion: "Instrucciones para Receta 3" }
];

const listaRecetas = document.getElementById("lista-recetas");
const eliminarRecetaBtn = document.getElementById("eliminar-receta");
const numeroRecetaInput = document.getElementById("numero-receta");

// Función para mostrar las recetas en la lista
function mostrarRecetas() {
    listaRecetas.innerHTML = "";
    recetas.forEach((receta, index) => {
        const li = document.createElement("li");
        li.textContent = `${receta.nombre}: ${receta.explicacion}`;
        listaRecetas.appendChild(li);
    });
}

// Función para eliminar una receta
eliminarRecetaBtn.addEventListener("click", () => {
    const numeroReceta = parseInt(numeroRecetaInput.value);
    if (!isNaN(numeroReceta) && numeroReceta >= 1 && numeroReceta <= recetas.length) {
        recetas.splice(numeroReceta - 1, 1);
        mostrarRecetas();
    } else {
        alert("Ingresa un número de receta válido.");
    }
});

// Mostrar las recetas iniciales
mostrarRecetas();
