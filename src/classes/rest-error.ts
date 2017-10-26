import { StatusCode } from '@bluejay/status-code';
import { TRestErrorCode } from '../types/rest-error-code';
import { IRestError } from '../interfaces/rest-error';
import { TRestErrorMeta } from '../types/rest-error-meta';

export abstract class RestError<M extends TRestErrorMeta = TRestErrorMeta, C extends TRestErrorCode = TRestErrorCode> extends Error implements IRestError<M, C> {
  public abstract readonly statusCode: StatusCode;
  public readonly code: C;
  public readonly meta: M;

  public constructor(message: string, meta: M = {} as M, code?: C) {
    super(message);
    this.meta = meta;
    this.code = (code || this.code || this.constructor.name) as C;
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