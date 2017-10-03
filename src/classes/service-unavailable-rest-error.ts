import * as StatusCode from '@bluejay/status-code';

import { RestError } from './rest-error';

export class ServiceUnavailableRestError extends RestError {
  public readonly statusCode = StatusCode.SERVICE_UNAVAILABLE;
}

export default ServiceUnavailableRestError;