import { IDivisorsNumber } from '../../domain/models/IDivisorsNumber';
import { IFindPrimeDivisorsUseCase } from '../../domain/useCases/IFindPrimeDivisorsUseCase';
import { IFindDivisorsOfNumber } from '../../utils/NumberDecomposer/protocols/IFindDivisorsOfNumber';
import { IFindPrimeDivisors } from '../../utils/NumberDecomposer/protocols/IFindPrimeDivisors';

export class FindDivisorsOfNumberUseCase implements IFindPrimeDivisorsUseCase {
  constructor(
    private findPrimeDivisors: IFindPrimeDivisors,
    private findDivisorsOfNumber: IFindDivisorsOfNumber,
  ) {}

  public execute(value: number): IDivisorsNumber {
    const primeDivisors = this.findPrimeDivisors.findPrimeDivisors(value);

    const divisorNumbers =
      this.findDivisorsOfNumber.findDivisorsOfNumber(primeDivisors);

    const removeDuplicate = [...new Set(primeDivisors)];

    return {
      entryNumber: value,
      divisorNumbers,
      primeDivisors: removeDuplicate,
    };
  }
}
