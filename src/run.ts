import { NumberDecomposer } from './utils/NumberDecomposer/implementations/FindDivisorsNumber';

const numberDecomposer = new NumberDecomposer();

export const run = (entryNumber: number) => {
  const primeDivisors = numberDecomposer.findPrimeDivisors(entryNumber);

  const divisorsNumber = numberDecomposer.findDivisorsOfNumber(primeDivisors);

  const removeDuplicate = [...new Set(primeDivisors)];

  console.log(`Número de entrada: ${entryNumber}`);
  console.log(`Números divisores: ${divisorsNumber}`);
  console.log(`Divisores primos: ${removeDuplicate}`);
};
