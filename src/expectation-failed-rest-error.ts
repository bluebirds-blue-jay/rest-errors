import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class ExpectationFailedRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.EXPECTATION_FAILED;
}

export default ExpectationFailedRestError;