import { findPrimeDivisors } from './FindPrimeDivisors';

export const findDivisorsNumber = (value: number): number[] => {
  const primeDivisors = findPrimeDivisors(value);

  const numberOneIndex = primeDivisors.findIndex(number => number === 1);

  primeDivisors.splice(numberOneIndex, 1);

  const divisors = [1];
  let indexWhile = 0;

  while (indexWhile < primeDivisors.length) {
    const primeDivisor = primeDivisors[indexWhile];

    divisors.forEach(divisor => {
      const newDivisor = primeDivisor * divisor;

      if (!divisors.includes(newDivisor)) divisors.push(newDivisor);
    });

    indexWhile += 1;
  }

  return divisors.sort((divisorA, divisorB) => divisorA - divisorB);
};

findDivisorsNumber(45);
