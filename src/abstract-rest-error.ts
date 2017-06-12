import { TCode } from '@bluejay/status-code';

import { TRestErrorCode } from './types';

export abstract class AbstractRestError extends Error {
  public abstract readonly statusCode: TCode;
  public readonly code: TRestErrorCode;
  public readonly meta: object;

  public constructor(message: string, meta?: object) {
    super(message);

    this.meta = meta || {};

    if (typeof this.code === 'undefined') {
      this.code = this.constructor.name;
    }
  }

  public getStatusCode(): TCode {
    return this.statusCode;
  }

  public getMeta(): object {
    return this.meta;
  }

  public getCode(): TRestErrorCode {
    return this.code;
  }
}

export default AbstractRestError;