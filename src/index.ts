export type RestErrorCode = string | number;

export abstract class RestError extends Error {
  public abstract readonly statusCode: number;
  public readonly code: RestErrorCode;
  public readonly meta: object;

  public constructor(message: string, meta?: object) {
    super(message);
    this.meta = meta || {};

    if (typeof this.code === 'undefined') {
      this.code = this.constructor.name;
    }
  }

  public getStatusCode(): number {
    return this.statusCode;
  }

  public getMeta(): object {
    return this.meta;
  }

  public getCode(): RestErrorCode {
    return this.code;
  }
}

export default RestError;