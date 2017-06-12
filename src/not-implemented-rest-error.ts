import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class NotImplementedRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.NOT_IMPLEMENTED;
}

export default NotImplementedRestError;