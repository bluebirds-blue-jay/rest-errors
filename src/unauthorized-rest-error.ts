import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class UnauthorizedRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.UNAUTHORIZED;
}

export default UnauthorizedRestError;