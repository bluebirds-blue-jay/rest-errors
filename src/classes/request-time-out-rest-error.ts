import { StatusCode } from '@bluejay/status-code';

import { RestError } from './rest-error';

export class RequestTimeOutRestError extends RestError {
  public readonly statusCode = StatusCode.REQUEST_TIME_OUT;
}

export default RequestTimeOutRestError;
