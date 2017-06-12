import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class InternalServerErrorRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.INTERNAL_SERVER_ERROR;
}

export default InternalServerErrorRestError;