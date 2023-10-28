function generarMatrizAleatoria(n) {
    const matriz = [];
    for (let i = 0; i < n; i++) {
      matriz[i] = [];
      for (let j = 0; j < n; j++) {
        matriz[i][j] = Math.floor(Math.random() * 100); // Valores aleatorios entre 0 y 99
      }
    }
    return matriz;
  }
  
  function sumarMatrices(matriz1, matriz2) {
    const n = matriz1.length;
    const resultado = [];
  
    for (let i = 0; i < n; i++) {
      resultado[i] = [];
      for (let j = 0; j < n; j++) {
        resultado[i][j] = matriz1[i][j] + matriz2[i][j];
      }
    }
  
    return resultado;
  }
  
  const n = 3; // Cambia este valor para definir el tamaño de las matrices (n x n)
  const matrizA = generarMatrizAleatoria(n);
  const matrizB = generarMatrizAleatoria(n);
  const matrizC = sumarMatrices(matrizA, matrizB);
  
  console.log("Matriz A:");
  console.table(matrizA);
  console.log("Matriz B:");
  console.table(matrizB);
  console.log("Matriz C (suma de A y B):");
  console.table(matrizC);
  