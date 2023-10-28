// Función para realizar operaciones matemáticas
function calcular(operacion) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = 0;
  
    switch (operacion) {
      case "suma":
        resultado = num1 + num2;
        break;
      case "resta":
        resultado = num1 - num2;
        break;
      case "multiplicacion":
        resultado = num1 * num2;
        break;
      case "division":
        if (num2 !== 0) {
          resultado = num1 / num2;
        } else {
          alert("No se puede dividir por cero.");
          return;
        }
        break;
    }
  
    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
  }
  
  // Escuchar eventos del botón
  document.getElementById("btnSuma").addEventListener("click", () => calcular("suma"));
  document.getElementById("btnResta").addEventListener("click", () => calcular("resta"));
  document.getElementById("btnMultiplicacion").addEventListener("click", () => calcular("multiplicacion"));
  document.getElementById("btnDivision").addEventListener("click", () => calcular("division"));
  