import * as StatusCode from '@bluejay/status-code';

import { RestError } from './rest-error';

export class RequestRangeUnsatisfiableRestError extends RestError {
  public readonly statusCode = StatusCode.REQUEST_RANGE_UNSATISFIABLE;
}

export default RequestRangeUnsatisfiableRestError;