import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class ConflictRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.CONFLICT;
}

export default ConflictRestError;