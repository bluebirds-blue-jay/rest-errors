import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class RequestEntityTooLargeRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.REQUEST_ENTITY_TOO_LARGE;
}

export default RequestEntityTooLargeRestError;