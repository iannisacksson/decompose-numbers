import { IDivisorsNumber } from '../../domain/models/IDivisorsNumber';
import { IFindPrimeDivisorsUseCase } from '../../domain/useCases/IFindPrimeDivisorsUseCase';
import { FindPrimeDivisorsController } from './FindPrimeDivisorsController';

interface ISut {
  findPrimeDivisorsController: FindPrimeDivisorsController;
  findPrimeDivisorsStub: IFindPrimeDivisorsUseCase;
}

const makeFindPrimeDivisors = (): IFindPrimeDivisorsUseCase => {
  class FindPrimeDivisorsStub implements IFindPrimeDivisorsUseCase {
    public execute(): IDivisorsNumber {
      return {
        entryNumber: 45,
        divisorNumbers: [1, 3, 5, 9, 15, 45],
        primeDivisors: [1, 3, 5],
      };
    }
  }

  return new FindPrimeDivisorsStub();
};

const makeSut = (): ISut => {
  const findPrimeDivisorsStub = makeFindPrimeDivisors();
  const findPrimeDivisorsController = new FindPrimeDivisorsController(
    findPrimeDivisorsStub,
  );

  return {
    findPrimeDivisorsController,
    findPrimeDivisorsStub,
  };
};

describe('FindPrimeDivisors Controller', () => {
  it('Should return 400 if no number is provided', () => {
    const { findPrimeDivisorsController } = makeSut();

    const httpRequest = { body: {} };

    const httpResponse = findPrimeDivisorsController.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual('Missing param: number');
  });

  it('Should call FindPrimeDivisorsUseCase with corrects values', () => {
    const { findPrimeDivisorsController, findPrimeDivisorsStub } = makeSut();

    const spyExecute = jest.spyOn(findPrimeDivisorsStub, 'execute');

    const httpRequest = { body: { number: 45 } };

    findPrimeDivisorsController.handle(httpRequest);

    expect(spyExecute).toHaveBeenCalledWith(45);
  });

  it('should return 500 if FindPrimeDivisorsUseCase throws', async () => {
    const { findPrimeDivisorsController, findPrimeDivisorsStub } = makeSut();

    jest.spyOn(findPrimeDivisorsStub, 'execute').mockImplementationOnce(() => {
      throw new Error();
    });

    const httpRequest = { body: { number: 45 } };

    const httpResponse = findPrimeDivisorsController.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body).toEqual({ message: 'Internal server error' });
  });

  it('Should return 200 if valid data is provided', () => {
    const { findPrimeDivisorsController } = makeSut();

    const httpRequest = { body: { number: 45 } };

    const primeDivisors = findPrimeDivisorsController.handle(httpRequest);

    expect(primeDivisors.statusCode).toBe(200);
    expect(primeDivisors.body).toEqual({
      entryNumber: 45,
      divisorNumbers: [1, 3, 5, 9, 15, 45],
      primeDivisors: [1, 3, 5],
    });
  });
});
