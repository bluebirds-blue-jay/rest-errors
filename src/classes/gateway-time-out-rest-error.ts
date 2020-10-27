import { StatusCode } from '@bluejay/status-code';

import { RestError } from './rest-error';

export class GatewayTimeOutRestError extends RestError {
  public readonly statusCode = StatusCode.GATEWAY_TIME_OUT;
}

export default GatewayTimeOutRestError;
