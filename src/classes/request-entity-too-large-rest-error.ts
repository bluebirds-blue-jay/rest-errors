import { StatusCode } from '@bluejay/status-code';

import { RestError } from './rest-error';

export class RequestEntityTooLargeRestError extends RestError {
  public readonly statusCode = StatusCode.REQUEST_ENTITY_TOO_LARGE;
}

export default RequestEntityTooLargeRestError;