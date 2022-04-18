import { FindPrimeDivisorsController } from './FindPrimeDivisorsController';

describe('FindPrimeDivisors Controller', () => {
  it('Should return 400 if no number is provided', () => {
    const findPrimeDivisorsController = new FindPrimeDivisorsController();

    const httpRequest = { body: {} };

    const httpResponse = findPrimeDivisorsController.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual('Missing param: number');
  });
});
