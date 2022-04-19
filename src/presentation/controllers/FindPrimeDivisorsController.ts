import { IFindPrimeDivisorsUseCase } from '../../domain/useCases/IFindPrimeDivisorsUseCase';
import { IController } from '../protocols/controller';
import { IHttpRequest, IHttpResponse } from '../protocols/http';

export class FindPrimeDivisorsController implements IController {
  constructor(private findPrimeDivisorsUseCase: IFindPrimeDivisorsUseCase) {}

  public handle(httpRequest: IHttpRequest): IHttpResponse {
    try {
      if (!httpRequest.body.number) {
        return { statusCode: 400, body: 'Missing param: number' };
      }

      const { number } = httpRequest.body;

      const primeDivisors = this.findPrimeDivisorsUseCase.execute(number);

      return { statusCode: 200, body: primeDivisors };
    } catch (error) {
      return { statusCode: 500, body: { message: 'Internal server error' } };
    }
  }
}
