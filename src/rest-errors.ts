import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';
import { BadRequestRestError } from './bad-request-rest-error';
import { UnauthorizedRestError } from './unauthorized-rest-error';
import { PaymentRequiredRestError } from './payment-required-rest-error';
import { ForbiddenRestError } from './forbidden-rest-error';
import { NotFoundRestError } from './not-found-rest-error';
import { MethodNotAllowedRestError } from './method-not-allowed-rest-error';
import { NotAcceptableRestError } from './not-acceptable-rest-error';
import { ProxyAuthenticationRequiredRestError } from './proxy-authentication-required-rest-error';
import { RequestTimeOutRestError } from './request-time-out-rest-error';
import { ConflictRestError } from './conflict-rest-error';
import { GoneRestError } from './gone-rest-error';
import { LengthRequiredRestError } from './length-required-rest-error';
import { PreconditionFailedRestError } from './precondition-failed-rest-error';
import { RequestEntityTooLargeRestError } from './request-entity-too-large-rest-error';
import { RequestUriTooLongRestError } from './request-uri-too-long-rest-error';
import { UnsupportedMediaTypeRestError } from './unsupported-media-type-rest-error';
import { RequestRangeUnsatisfiableRestError } from './request-range-unsatisfiable-rest-error';
import { ExpectationFailedRestError } from './expectation-failed-rest-error';
import { InternalServerErrorRestError } from './internal-server-error-rest-error';
import { NotImplementedRestError } from './not-implemented-rest-error';
import { BadGatewayRestError } from './bad-gateway-rest-error';
import { ServiceUnavailableRestError } from './service-unavailable-rest-error';
import { GatewayTimeOutRestError } from './gateway-time-out-rest-error';
import { HTTPVersionNotSupportedRestError } from './http-version-not-supported-rest-error';

const map: { [code: number]: new(...args: any[]) => AbstractRestError } = {
  [StatusCode.BAD_REQUEST]: BadRequestRestError,
  [StatusCode.UNAUTHORIZED]: UnauthorizedRestError,
  [StatusCode.PAYMENT_REQUIRED]: PaymentRequiredRestError,
  [StatusCode.FORBIDDEN]: ForbiddenRestError,
  [StatusCode.NOT_FOUND]: NotFoundRestError,
  [StatusCode.METHOD_NOT_ALLOWED]: MethodNotAllowedRestError,
  [StatusCode.NOT_ACCEPTABLE]: NotAcceptableRestError,
  [StatusCode.PROXY_AUTHENTICATION_REQUIRED]: ProxyAuthenticationRequiredRestError,
  [StatusCode.REQUEST_TIME_OUT]: RequestTimeOutRestError,
  [StatusCode.CONFLICT]: ConflictRestError,
  [StatusCode.GONE]: GoneRestError,
  [StatusCode.LENGTH_REQUIRED]: LengthRequiredRestError,
  [StatusCode.PRECONDITION_FAILED]: PreconditionFailedRestError,
  [StatusCode.REQUEST_ENTITY_TOO_LARGE]: RequestEntityTooLargeRestError,
  [StatusCode.REQUEST_URI_TOO_LONG]: RequestUriTooLongRestError,
  [StatusCode.UNSUPPORTED_MEDIA_TYPE]: UnsupportedMediaTypeRestError,
  [StatusCode.REQUEST_RANGE_UNSATISFIABLE]: RequestRangeUnsatisfiableRestError,
  [StatusCode.EXPECTATION_FAILED]: ExpectationFailedRestError,
  [StatusCode.INTERNAL_SERVER_ERROR]: InternalServerErrorRestError,
  [StatusCode.NOT_IMPLEMENTED]: NotImplementedRestError,
  [StatusCode.BAD_GATEWAY]: BadGatewayRestError,
  [StatusCode.SERVICE_UNAVAILABLE]: ServiceUnavailableRestError,
  [StatusCode.GATEWAY_TIME_OUT]: GatewayTimeOutRestError,
  [StatusCode.HTTP_VERSION_NOT_SUPPORTED]: HTTPVersionNotSupportedRestError
};

export function fromStatusCode(statusCode: StatusCode.TCode, message: string, meta?: object): AbstractRestError {
  if (StatusCode.isErrorCode(statusCode)) {
    return new map[statusCode](message, meta);
  }

  throw new Error(`${statusCode} is not a valid error code.`);
}

export function isRestError(err: any): err is AbstractRestError {
  return err instanceof AbstractRestError;
}