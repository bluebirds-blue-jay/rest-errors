import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class RequestRangeUnsatisfiableRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.REQUEST_RANGE_UNSATISFIABLE;
}

export default RequestRangeUnsatisfiableRestError;