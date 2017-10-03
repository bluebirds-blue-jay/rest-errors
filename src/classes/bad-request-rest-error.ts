import * as StatusCode from '@bluejay/status-code';

import { RestError } from './rest-error';

export class BadRequestRestError extends RestError {
  public readonly statusCode = StatusCode.BAD_REQUEST;
}

export default BadRequestRestError;