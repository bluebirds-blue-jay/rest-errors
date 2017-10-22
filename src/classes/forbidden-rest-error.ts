import { StatusCode } from '@bluejay/status-code';

import { RestError } from './rest-error';

export class ForbiddenRestError extends RestError {
  public readonly statusCode = StatusCode.FORBIDDEN;
}

export default ForbiddenRestError;