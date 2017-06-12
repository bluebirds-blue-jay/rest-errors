import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class HTTPVersionNotSupportedRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.HTTP_VERSION_NOT_SUPPORTED;
}

export default HTTPVersionNotSupportedRestError;