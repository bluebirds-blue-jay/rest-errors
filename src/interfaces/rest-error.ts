import { TStatusCode } from '@bluejay/status-code';
import { TRestErrorMeta } from '../types/rest-error-meta';
import { TRestErrorCode } from '../types/rest-error-code';

export interface IRestError extends Error {
  meta?: TRestErrorMeta;
  code: TRestErrorCode;
  statusCode: TStatusCode;
  getMeta(): TRestErrorMeta;
  getMessage(): string;
  getStatusCode(): TStatusCode;
  getStack(): string;
  getCode(): TRestErrorCode;
}