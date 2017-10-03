import * as StatusCode from '@bluejay/status-code';

import { RestError } from './rest-error';

export class NotAcceptableRestError extends RestError {
  public readonly statusCode = StatusCode.NOT_ACCEPTABLE;
}

export default NotAcceptableRestError;