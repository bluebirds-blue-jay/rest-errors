import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class NotAcceptableRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.NOT_ACCEPTABLE;
}

export default NotAcceptableRestError;