import { IPrimeDivisors } from '../../domain/models/IPrimeDivisors';
import { IFindPrimeDivisorsUseCase } from '../../domain/useCases/IFindPrimeDivisorsUseCase';
import { IFindPrimeDivisors } from '../../utils/NumberDecomposer/protocols/IFindPrimeDivisors';

export class FindDivisorsOfNumberUseCase implements IFindPrimeDivisorsUseCase {
  constructor(private findPrimeDivisors: IFindPrimeDivisors) {}

  public execute(value: number): IPrimeDivisors {
    this.findPrimeDivisors.findPrimeDivisors(value);

    return null;
  }
}
