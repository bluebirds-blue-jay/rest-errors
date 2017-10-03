import { StatusCode, TStatusCode } from '@bluejay/status-code';
import { RestError } from '../classes/rest-error';
import { TConstructible } from '@bluejay/utils';
import { map } from '../misc/map';
import { TRestErrorCode } from '../types/rest-error-code';
import { TRestErrorMeta } from '../types/rest-error-meta';

export function fromStatusCode(statusCode: TStatusCode, message: string, meta?: TRestErrorMeta, code?: TRestErrorCode): RestError {
  if (StatusCode.isErrorStatusCode(statusCode)) {
    return new (map.get(statusCode) as TConstructible<RestError>)(message, meta, code);
  }

  throw new Error(`${statusCode} is not a valid error code.`);
}