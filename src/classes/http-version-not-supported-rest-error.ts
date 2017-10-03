import * as StatusCode from '@bluejay/status-code';

import { RestError } from './rest-error';

export class HTTPVersionNotSupportedRestError extends RestError {
  public readonly statusCode = StatusCode.HTTP_VERSION_NOT_SUPPORTED;
}

export default HTTPVersionNotSupportedRestError;