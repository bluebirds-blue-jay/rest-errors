import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class BadGatewayRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.BAD_GATEWAY;
}

export default BadGatewayRestError;