export const findPrimeDivisors = (value: number): number[] => {
  const primeDivisors: number[] = [];

  const index = 1;
  let numberDivider = 2;
  let result = value;

  while (result > 1) {
    const newResult = result / numberDivider;

    if (Number.isInteger(newResult)) {
      primeDivisors.push(numberDivider);
      result = newResult;
    } else {
      numberDivider += index;
    }
  }

  primeDivisors.push(1);

  return primeDivisors.sort();
};
