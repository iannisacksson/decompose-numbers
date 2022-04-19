import { IFindPrimeDivisors } from '../../utils/NumberDecomposer/protocols/IFindPrimeDivisors';
import { FindDivisorsOfNumberUseCase } from './FindDivisorsOfNumberUseCase';

interface ISut {
  numberDecomposerStub: IFindPrimeDivisors;
  findDivisorsOfNumberUseCase: FindDivisorsOfNumberUseCase;
}

const makeNumberDecomposer = () => {
  class NumberDecomposerStub implements IFindPrimeDivisors {
    public findPrimeDivisors(): number[] {
      return [1, 3, 5];
    }
  }

  return new NumberDecomposerStub();
};

const makeSut = (): ISut => {
  const numberDecomposerStub = makeNumberDecomposer();
  const findDivisorsOfNumberUseCase = new FindDivisorsOfNumberUseCase(
    numberDecomposerStub,
  );

  return {
    numberDecomposerStub,
    findDivisorsOfNumberUseCase,
  };
};

describe('FindDivisorsOfNumber UseCase', () => {
  it('Should call FindPrimeDivisors with correct values', () => {
    const { findDivisorsOfNumberUseCase, numberDecomposerStub } = makeSut();

    const spyFindPrimeDivisors = jest.spyOn(
      numberDecomposerStub,
      'findPrimeDivisors',
    );

    findDivisorsOfNumberUseCase.execute(45);

    expect(spyFindPrimeDivisors).toHaveBeenCalledWith(45);
  });
});
