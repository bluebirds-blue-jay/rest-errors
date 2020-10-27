import { StatusCode } from '@bluejay/status-code';

import { RestError } from './rest-error';

export class BadGatewayRestError extends RestError {
  public readonly statusCode = StatusCode.BAD_GATEWAY;
}

export default BadGatewayRestError;
