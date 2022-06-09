export function factorial(n: number): number {
  let i = 0;
  let f = 1;
  if (n === 0) {
    // fattoriale di 0
    return f;
  } else if (n < 0) {
    throw new TypeError();
  } else {
    while (i <= n) {
      if (i === 0) {
        f = 1;
        i += 1;
      } else {
        f = f * i;
        i += 1;
      }
    }
  }
  return f;
}

export function exponential(x: number, n: number): number {
  let i = 1;
  let p = 1;
  if (n === 0) {
    // potenza 0
    x = 1;
  } else {
    while (i <= n) {
      p = p * x;
      i += 1;
    }
  }
  return p;
}

export function taylor(x: number, iter: number) {
  let i = 0;
  let s = 0;
  if (iter < 0) {
    throw new Error();
  }
  while (i <= iter) {
    s += exponential(x, i) / factorial(i);
    i += 1;
  }
  return s;
}

function binomialCoef(n: number, k: number) {
  const coef = factorial(n) / (factorial(k) * factorial(n - k));
  return coef;
}

export function tartaglia(maxIter: number) {
  // Funzione tartaglia (Triangolo di Tartaglia)
  // Dato n, restituisce una lista di liste, raffigurante ognuna di esse una riga (fino ad n) del Triangolo di
  // Tartaglia
  if (maxIter <= 0){
      throw new Error();
  }
  let n = 1;
  let k = 0;
  let col = 1;
  // inizializzo gli array
  let tmpRow = [];
  let matrix = [];
  let row = 0;
  while (col <= maxIter) {
    if (row === 0) {
      // caso iniziale, calcolo tramite coefBinomial dal 2+
      matrix[row] = [1];
      row += 1;
      matrix[row] = [1, 1];
    } else {
      while (k <= col) {
        // creo una nuova riga di valori
        tmpRow[k] = binomialCoef(n, k);
        k += 1;
      }
      matrix[row] = tmpRow;
    }
    // inserisco la nuova riga nella matrice
    col += 1;
    n += 1;
    k = 0;
    row += 1;
    // svuoto l'array
    tmpRow = [];
  }
  return matrix;
}
