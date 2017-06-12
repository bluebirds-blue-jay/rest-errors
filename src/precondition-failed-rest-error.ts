import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class PreconditionFailedRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.PRECONDITION_FAILED;
}

export default PreconditionFailedRestError;