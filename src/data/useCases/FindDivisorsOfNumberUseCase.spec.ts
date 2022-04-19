import { IFindDivisorsOfNumber } from '../../utils/NumberDecomposer/protocols/IFindDivisorsOfNumber';
import { IFindPrimeDivisors } from '../../utils/NumberDecomposer/protocols/IFindPrimeDivisors';
import { FindDivisorsOfNumberUseCase } from './FindDivisorsOfNumberUseCase';

interface ISut {
  findPrimeDivisorsStub: IFindPrimeDivisors;
  findDivisorsOfNumberStub: IFindDivisorsOfNumber;
  findDivisorsOfNumberUseCase: FindDivisorsOfNumberUseCase;
}

const makeFindPrimeDivisors = () => {
  class FindPrimeDivisors implements IFindPrimeDivisors {
    public findPrimeDivisors(): number[] {
      return [1, 3, 3, 5];
    }
  }

  return new FindPrimeDivisors();
};

const makeFindDivisorsOfNumber = () => {
  class FindDivisorsOfNumber implements IFindDivisorsOfNumber {
    public findDivisorsOfNumber(): number[] {
      return [1, 3, 5, 9, 15, 45];
    }
  }

  return new FindDivisorsOfNumber();
};

const makeSut = (): ISut => {
  const findPrimeDivisorsStub = makeFindPrimeDivisors();
  const findDivisorsOfNumberStub = makeFindDivisorsOfNumber();
  const findDivisorsOfNumberUseCase = new FindDivisorsOfNumberUseCase(
    findPrimeDivisorsStub,
    findDivisorsOfNumberStub,
  );

  return {
    findPrimeDivisorsStub,
    findDivisorsOfNumberUseCase,
    findDivisorsOfNumberStub,
  };
};

describe('FindDivisorsOfNumber UseCase', () => {
  it('Should call FindPrimeDivisors with correct values', () => {
    const { findDivisorsOfNumberUseCase, findPrimeDivisorsStub } = makeSut();

    const spyFindPrimeDivisors = jest.spyOn(
      findPrimeDivisorsStub,
      'findPrimeDivisors',
    );

    findDivisorsOfNumberUseCase.execute(45);

    expect(spyFindPrimeDivisors).toHaveBeenCalledWith(45);
  });

  it('Should call FindDivisorsOfNumber with correct values', () => {
    const { findDivisorsOfNumberUseCase, findDivisorsOfNumberStub } = makeSut();

    const spyFindDivisorsOfNumber = jest.spyOn(
      findDivisorsOfNumberStub,
      'findDivisorsOfNumber',
    );

    findDivisorsOfNumberUseCase.execute(45);

    expect(spyFindDivisorsOfNumber).toHaveBeenCalledWith([1, 3, 3, 5]);
  });
});
