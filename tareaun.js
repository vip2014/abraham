function llenarMatrizCaracol(n) {
    const matriz = new Array(n).fill().map(() => new Array(n).fill(0));
    let valor = 1;
    let inicioFila = 0;
    let finFila = n - 1;
    let inicioColumna = 0;
    let finColumna = n - 1;
  
    while (inicioFila <= finFila && inicioColumna <= finColumna) {
      // Llenar fila superior
      for (let i = inicioColumna; i <= finColumna; i++) {
        matriz[inicioFila][i] = valor++;
      }
      inicioFila++;
  
      // Llenar columna derecha
      for (let i = inicioFila; i <= finFila; i++) {
        matriz[i][finColumna] = valor++;
      }
      finColumna--;
  
      // Llenar fila inferior
      if (inicioFila <= finFila) {
        for (let i = finColumna; i >= inicioColumna; i--) {
          matriz[finFila][i] = valor++;
        }
        finFila--;
      }
  
      // este if es para llenar la columna izquierda
      if (inicioColumna <= finColumna) {
        for (let i = finFila; i >= inicioFila; i--) {
          matriz[i][inicioColumna] = valor++;
        }
        inicioColumna++;
      }
    }
  
    return matriz;
  }
  
  // Ejemplo de uso con una matriz de 4x4
  const matrizResultado = llenarMatrizCaracol(4);
  for (let fila of matrizResultado) {
    console.log(fila.join("\t"));
  }