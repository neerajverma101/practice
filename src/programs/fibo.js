const input = 9;
//output: [0,1,1,2,3]
export const fibo = (n) => {
  console.log("input", n);
  const result = [0, 1];
  for (let index = 2; index < n; index++) {
    result.push(result[index - 1] + result[index - 2]);
  }
  return result.slice(0, n);
};
console.log(fibo(input));
