import { StatusCode } from '@bluejay/status-code';
import { TRestErrorCode } from '../types/rest-error-code';
import { TRestErrorMeta } from '../types/rest-error-meta';

export interface IRestError<M extends TRestErrorMeta = TRestErrorMeta, C extends TRestErrorCode = TRestErrorCode> extends Error {
  meta?: TRestErrorMeta;
  code: TRestErrorCode;
  statusCode: StatusCode;
  getMeta(): TRestErrorMeta;
  getMessage(): string;
  getStatusCode(): StatusCode;
  getStack(): string;
  getCode(): TRestErrorCode;
}
