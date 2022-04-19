import { IFindDivisorsOfNumber } from '../protocols/IFindDivisorsOfNumber';
import { IFindPrimeDivisors } from '../protocols/IFindPrimeDivisors';

export class NumberDecomposer
  implements IFindDivisorsOfNumber, IFindPrimeDivisors
{
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

  public findPrimeDivisors(value: number): number[] {
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

    const sortedPrimeDivisors = primeDivisors.sort(
      (divisorA, divisorB) => divisorA - divisorB,
    );

    return sortedPrimeDivisors;
  }
}
