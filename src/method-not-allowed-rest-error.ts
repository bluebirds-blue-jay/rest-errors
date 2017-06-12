import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class MethodNotAllowedRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.METHOD_NOT_ALLOWED;
}

export default MethodNotAllowedRestError;