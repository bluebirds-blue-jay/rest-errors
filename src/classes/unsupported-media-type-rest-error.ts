import { StatusCode } from '@bluejay/status-code';

import { RestError } from './rest-error';

export class UnsupportedMediaTypeRestError extends RestError {
  public readonly statusCode = StatusCode.UNSUPPORTED_MEDIA_TYPE;
}

export default UnsupportedMediaTypeRestError;