import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class ForbiddenRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.FORBIDDEN;
}

export default ForbiddenRestError;