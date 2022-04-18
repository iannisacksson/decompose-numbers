export const findDivisorsNumber = (primeNumbers: number[]): number[] => {
  const divisors = [1];
  let indexWhile = 0;

  while (indexWhile < primeNumbers.length) {
    const primeDivisor = primeNumbers[indexWhile];

    divisors.forEach(divisor => {
      const newDivisor = primeDivisor * divisor;

      if (!divisors.includes(newDivisor)) divisors.push(newDivisor);
    });

    indexWhile += 1;
  }

  return divisors.sort((divisorA, divisorB) => divisorA - divisorB);
};
