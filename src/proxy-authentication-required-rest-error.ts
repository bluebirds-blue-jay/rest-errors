import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class ProxyAuthenticationRequiredRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.PROXY_AUTHENTICATION_REQUIRED;
}

export default ProxyAuthenticationRequiredRestError;