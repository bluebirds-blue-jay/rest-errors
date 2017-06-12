import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class LengthRequiredRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.LENGTH_REQUIRED;
}

export default LengthRequiredRestError;