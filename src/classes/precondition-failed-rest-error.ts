import { StatusCode } from '@bluejay/status-code';

import { RestError } from './rest-error';

export class PreconditionFailedRestError extends RestError {
  public readonly statusCode = StatusCode.PRECONDITION_FAILED;
}

export default PreconditionFailedRestError;
