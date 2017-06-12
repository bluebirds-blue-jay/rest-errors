import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class GatewayTimeOutRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.GATEWAY_TIME_OUT;
}

export default GatewayTimeOutRestError;