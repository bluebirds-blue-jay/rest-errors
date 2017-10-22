import { StatusCode } from '@bluejay/status-code';

import { RestError } from './rest-error';

export class UnauthorizedRestError extends RestError {
  public readonly statusCode = StatusCode.UNAUTHORIZED;
}

export default UnauthorizedRestError;