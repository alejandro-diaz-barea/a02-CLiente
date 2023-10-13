import { formatISOWeek, isValid, parseISO } from 'date-fns';

function calcularNumeroSemana() {
  const fechaIngresada = prompt("Ingresa una fecha en formato YYYY-MM-DD:");

  if (!fechaIngresada) {
    alert("No ingresaste una fecha.");
    return;
  }

  const fechaObj = parseISO(fechaIngresada);

  if (!isValid(fechaObj)) {
    alert("La fecha ingresada no es válida.");
    return;
  }

  const año = fechaObj.getFullYear();
  const mes = fechaObj.getMonth();
  const primerEnero = new Date(año, 0, 1);
  const diasHastaJueves = (4 - primerEnero.getDay() + 7) % 7;
  primerEnero.setDate(primerEnero.getDate() + diasHastaJueves);

  const numeroSemana = formatISOWeek(fechaObj);

  alert(`La fecha ${fechaIngresada} pertenece a la semana número ${numeroSemana} del año.`);
}

calcularNumeroSemana();
