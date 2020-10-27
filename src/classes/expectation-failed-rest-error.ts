import { StatusCode } from '@bluejay/status-code';

import { RestError } from './rest-error';

export class ExpectationFailedRestError extends RestError {
  public readonly statusCode = StatusCode.EXPECTATION_FAILED;
}

export default ExpectationFailedRestError;
