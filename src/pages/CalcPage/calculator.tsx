export function add(a: number, b: number): number {
  return a + b;
}

export function sub(a: number, b: number): number {
  return a - b;
}

export function mul(a: number, b: number): number {
  return a * b;
}

export function div(a: number, b: number): number | string {
  if (b === 0) return "Impossible";
  return a / b;
}

export function mkArray(n: number): number[] | string {
  if (n < 0) return "Impossible";
  const a: number[] = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      a.push(Math.floor(Math.random() * 1000));
    } else {
      a.push(a[i - 1] * 2);
    }
  }
  a.sort((a, b) => a - b);
  return a;
}
