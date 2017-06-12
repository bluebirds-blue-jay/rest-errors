import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class RequestTimeOutRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.REQUEST_TIME_OUT;
}

export default RequestTimeOutRestError;