import { StatusCode } from '@bluejay/status-code';

import { RestError } from './rest-error';

export class ProxyAuthenticationRequiredRestError extends RestError {
  public readonly statusCode = StatusCode.PROXY_AUTHENTICATION_REQUIRED;
}

export default ProxyAuthenticationRequiredRestError;
