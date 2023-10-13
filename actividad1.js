// Obtener el valor del radio del usuario
const radio = parseFloat(prompt("Ingrese el valor del radio:"));

// Calcular diámetro, perímetro, área del círculo y área de la esfera
const diametro = 2 * radio;
const perimetro = 2 * Math.PI * radio;
const areaCirculo = Math.PI * Math.pow(radio, 2);
const areaEsfera = 4 * Math.PI * Math.pow(radio, 2);
const volumenEsfera = (4/3) * Math.PI * Math.pow(radio, 3);

// Mostrar los resultados en la página
document.write(`Valor del radio: ${radio.toFixed(2)} cm <br>`);
document.write(`Diámetro: ${diametro.toFixed(2)} cm <br>`);
document.write(`Perímetro de la circunferencia: ${perimetro.toFixed(2)} cm <br>`);
document.write(`Área del círculo: ${areaCirculo.toFixed(2)} cm² <br>`);
document.write(`Área de la esfera: ${areaEsfera.toFixed(2)} cm² <br>`);
document.write(`Volumen de la esfera: ${volumenEsfera.toFixed(2)} cm³ <br>`);
