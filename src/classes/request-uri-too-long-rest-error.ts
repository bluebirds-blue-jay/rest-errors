import { StatusCode } from '@bluejay/status-code';

import { RestError } from './rest-error';

export class RequestUriTooLongRestError extends RestError {
  public readonly statusCode = StatusCode.REQUEST_URI_TOO_LONG;
}

export default RequestUriTooLongRestError;
