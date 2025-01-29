const array = [1, 5, 4, 3, 3, 7, 2, 1];

export const countDuplicate = (arr) => {
  const count = {};
  arr.forEach((el) => {
    if (count[el]) {
      count[el] = count[el] + 1;
    } else {
      count[el] = 1;
    }
  });
  return count;
};

console.log(countDuplicate(array));
