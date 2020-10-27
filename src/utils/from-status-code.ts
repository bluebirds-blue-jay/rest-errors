import { isErrorStatusCode, StatusCode } from '@bluejay/status-code';
import { TConstructible } from '@bluejay/utils';
import { RestError } from '../classes/rest-error';
import { map } from '../misc/errors-map';
import { TRestErrorCode } from '../types/rest-error-code';
import { TRestErrorMeta } from '../types/rest-error-meta';

export function fromStatusCode(statusCode: StatusCode, message: string, meta?: TRestErrorMeta, code?: TRestErrorCode): RestError {
  if (isErrorStatusCode(statusCode)) {
    return new (map.get(statusCode) as TConstructible<RestError>)(message, meta, code);
  }

  throw new Error(`${statusCode} is not a valid error code.`);
}


