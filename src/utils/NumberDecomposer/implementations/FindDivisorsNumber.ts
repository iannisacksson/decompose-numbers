import { IFindDivisorsOfNumber } from '../protocols/IFindDivisorsOfNumber';

export class NumberDecomposer implements IFindDivisorsOfNumber {
  public findDivisorsOfNumber(primeNumbers: number[]): number[] {
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

    const sortedDivisors = divisors.sort(
      (divisorA, divisorB) => divisorA - divisorB,
    );

    return sortedDivisors;
  }
}
