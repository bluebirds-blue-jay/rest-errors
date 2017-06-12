import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class BadRequestRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.BAD_REQUEST;
}

export default BadRequestRestError;