import { StatusCode } from '@bluejay/status-code';

import { RestError } from './rest-error';

export class NotFoundRestError extends RestError {
  public readonly statusCode = StatusCode.NOT_FOUND;
}

export default NotFoundRestError;
