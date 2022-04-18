import { IPrimeDivisors } from '../models/IPrimeDivisors';

export interface IFindPrimeDivisorsUseCase {
  execute(value: number): IPrimeDivisors;
}
