function fibonacci(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else {
      let sequence = [0, 1];
      while (sequence.length < n) {
        let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextNumber);
      }
      return sequence;
    }
  }
  
  const n = 10; // Cambia este valor para obtener una secuencia de Fibonacci de diferente longitud
  const result = fibonacci(n);
  console.log(`Secuencia de Fibonacci de longitud ${n}:`);
  console.log(result);
  