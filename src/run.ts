import { findDivisorsNumber } from './utils/FindDivisorsNumber';
import { findPrimeDivisors } from './utils/FindPrimeDivisors';

export const run = (entryNumber: number) => {
  const primeDivisors = findPrimeDivisors(entryNumber);

  const divisorsNumber = findDivisorsNumber(primeDivisors);

  const removeDuplicate = [...new Set(primeDivisors)];

  console.log(`Número de entrada: ${entryNumber}`);
  console.log(`Números divisores: ${divisorsNumber}`);
  console.log(`Divisores primos: ${removeDuplicate}`);
};
