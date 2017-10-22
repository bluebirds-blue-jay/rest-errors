import { StatusCode } from '@bluejay/status-code';

import { RestError } from './rest-error';

export class NotImplementedRestError extends RestError {
  public readonly statusCode = StatusCode.NOT_IMPLEMENTED;
}

export default NotImplementedRestError;