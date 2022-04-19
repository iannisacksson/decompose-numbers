import { IPrimeDivisors } from '../../domain/models/IPrimeDivisors';
import { IFindPrimeDivisorsUseCase } from '../../domain/useCases/IFindPrimeDivisorsUseCase';
import { IFindDivisorsOfNumber } from '../../utils/NumberDecomposer/protocols/IFindDivisorsOfNumber';
import { IFindPrimeDivisors } from '../../utils/NumberDecomposer/protocols/IFindPrimeDivisors';

export class FindDivisorsOfNumberUseCase implements IFindPrimeDivisorsUseCase {
  constructor(
    private findPrimeDivisors: IFindPrimeDivisors,
    private findDivisorsOfNumber: IFindDivisorsOfNumber,
  ) {}

  public execute(value: number): IPrimeDivisors {
    const primeDivisors = this.findPrimeDivisors.findPrimeDivisors(value);

    this.findDivisorsOfNumber.findDivisorsOfNumber(primeDivisors);

    return null;
  }
}
