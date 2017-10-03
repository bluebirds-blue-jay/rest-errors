import * as StatusCode from '@bluejay/status-code';

import { RestError } from './rest-error';

export class ConflictRestError extends RestError {
  public readonly statusCode = StatusCode.CONFLICT;
}

export default ConflictRestError;