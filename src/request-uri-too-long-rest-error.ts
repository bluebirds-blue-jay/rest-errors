import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class RequestUriTooLongRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.REQUEST_URI_TOO_LONG;
}

export default RequestUriTooLongRestError;