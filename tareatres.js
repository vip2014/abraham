function mostrarHora() {
  const ahora = new Date();
  const horas = ahora.getHours().toString().padStart(2, '0');
  const minutos = ahora.getMinutes().toString().padStart(2, '0');
  const segundos = ahora.getSeconds().toString().padStart(2, '0');
  console.log(`Hora actual: ${horas}:${minutos}:${segundos}`);
}

mostrarHora();





