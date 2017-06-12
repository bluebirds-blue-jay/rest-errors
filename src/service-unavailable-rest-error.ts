import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class ServiceUnavailableRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.SERVICE_UNAVAILABLE;
}

export default ServiceUnavailableRestError;