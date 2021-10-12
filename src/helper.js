export function obtenerDiferenciaYear(year){
  return new Date().getFullYear() - year;
}

//Calcular total a pagar segun la marca
export function calcularMarca(marca){
  let incremento = 0;

  switch (marca) {
    case 'europeo':
      incremento = 1.30;
      break;
    case 'americano':
      incremento = 1.15;
      break;
    case 'asiatico':
      incremento = 1.05;
      break;
    default:
      break;
  }
  return incremento;
}

//Calcular el incremento
export function calcularAumento(plan){
  return (plan === 'basico') ? 1.20 : 1.50;
}

//muestra la primer letra mayuscula
export function capitalize(texto){
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

