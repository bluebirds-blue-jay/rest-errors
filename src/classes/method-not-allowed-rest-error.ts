import { StatusCode } from '@bluejay/status-code';

import { RestError } from './rest-error';

export class MethodNotAllowedRestError extends RestError {
  public readonly statusCode = StatusCode.METHOD_NOT_ALLOWED;
}

export default MethodNotAllowedRestError;