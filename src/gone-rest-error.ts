import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class GoneRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.GONE;
}

export default GoneRestError;