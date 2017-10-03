import { TStatusCode } from '@bluejay/status-code';
import { TRestErrorMeta } from '../types/rest-error-meta';

export interface IRestError extends Error {
  meta?: TRestErrorMeta;
  code: string;
  statusCode: TStatusCode;
  getMeta(): TRestErrorMeta;
  getMessage(): string;
  getStatusCode(): TStatusCode;
}