import { TStatusCode } from '@bluejay/status-code';
import { TRestErrorCode } from '../types/rest-error-code';

export abstract class RestError extends Error {
  public abstract readonly statusCode: TStatusCode;
  public readonly code: TRestErrorCode;
  public readonly meta: object;

  public constructor(message: string, meta: object = {}, code?: TRestErrorCode) {
    super(message);
    this.meta = meta;
    this.code = code || this.code || this.constructor.name;
  }

  public getStatusCode(): TStatusCode {
    return this.statusCode;
  }

  public getMeta(): object {
    return this.meta;
  }

  public getMessage() {
    return this.message;
  }

  public getStack() {
    return this.stack;
  }

  public getCode(): TRestErrorCode {
    return this.code;
  }
}

export default RestError;