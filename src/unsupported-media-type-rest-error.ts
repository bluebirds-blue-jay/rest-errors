import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class UnsupportedMediaTypeRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.UNSUPPORTED_MEDIA_TYPE;
}

export default UnsupportedMediaTypeRestError;