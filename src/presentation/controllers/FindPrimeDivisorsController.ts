import { IController } from '../protocols/controller';
import { IHttpRequest, IHttpResponse } from '../protocols/http';

export class FindPrimeDivisorsController implements IController {
  public handle(httpRequest: IHttpRequest): IHttpResponse {
    if (!httpRequest.body.number) {
      return { statusCode: 400, body: 'Missing param: number' };
    }

    return null;
  }
}
