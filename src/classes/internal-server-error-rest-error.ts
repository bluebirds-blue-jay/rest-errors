import * as StatusCode from '@bluejay/status-code';

import { RestError } from './rest-error';

export class InternalServerErrorRestError extends RestError {
  public readonly statusCode = StatusCode.INTERNAL_SERVER_ERROR;
}

export default InternalServerErrorRestError;