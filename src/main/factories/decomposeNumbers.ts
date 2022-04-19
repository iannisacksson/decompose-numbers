import { FindDivisorsOfNumberUseCase } from '../../data/useCases/FindDivisorsOfNumberUseCase';
import { FindPrimeDivisorsController } from '../../presentation/controllers/FindPrimeDivisorsController';
import { IController } from '../../presentation/protocols';
import { NumberDecomposer } from '../../utils/NumberDecomposer/implementations/FindDivisorsNumber';

export const makeDecomposeNumbersController = (): IController => {
  const numberDecomposer = new NumberDecomposer();
  const findDivisorsOfNumberUseCase = new FindDivisorsOfNumberUseCase(
    numberDecomposer,
    numberDecomposer,
  );
  const findDivisorsOfNumberController = new FindPrimeDivisorsController(
    findDivisorsOfNumberUseCase,
  );

  return findDivisorsOfNumberController;
};
