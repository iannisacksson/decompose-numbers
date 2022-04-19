import { IDivisorsNumber } from '../models/IDivisorsNumber';

export interface IFindPrimeDivisorsUseCase {
  execute(value: number): IDivisorsNumber;
}
