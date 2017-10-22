import { StatusCode } from '@bluejay/status-code';

import { RestError } from './rest-error';

export class LengthRequiredRestError extends RestError {
  public readonly statusCode = StatusCode.LENGTH_REQUIRED;
}

export default LengthRequiredRestError;