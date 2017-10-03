import * as StatusCode from '@bluejay/status-code';

import { RestError } from './rest-error';

export class GoneRestError extends RestError {
  public readonly statusCode = StatusCode.GONE;
}

export default GoneRestError;