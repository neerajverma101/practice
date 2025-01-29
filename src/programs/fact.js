const input = 5;

export const fact = (n) => {
  return n === 1 || n === 0 ? 1 : n * fact(n - 1);
};

console.log(fact(input));
