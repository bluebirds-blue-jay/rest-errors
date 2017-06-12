import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class NotFoundRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.NOT_FOUND;
}

export default NotFoundRestError;