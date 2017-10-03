import { TStatusCode } from '@bluejay/status-code';
import { TRestErrorCode } from '../types/rest-error-code';
import { IRestError } from '../interfaces/rest-error';
import { TRestErrorMeta } from '../types/rest-error-meta';

export abstract class RestError extends Error implements IRestError {
  public abstract readonly statusCode: TStatusCode;
  public readonly code: TRestErrorCode;
  public readonly meta: TRestErrorMeta;

  public constructor(message: string, meta: object = {}, code?: TRestErrorCode) {
    super(message);
    this.meta = meta;
    this.code = code || this.code || this.constructor.name;
  }

  public getStatusCode() {
    return this.statusCode;
  }

  public getMeta() {
    return this.meta;
  }

  public getMessage() {
    return this.message;
  }

  public getStack() {
    return this.stack as string;
  }

  public getCode() {
    return this.code;
  }
}

export default RestError;