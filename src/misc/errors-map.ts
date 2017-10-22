import { StatusCode } from '@bluejay/status-code';
import * as Utils from '@bluejay/utils';
import { RestError } from '../classes/rest-error';
import { BadRequestRestError } from '../classes/bad-request-rest-error';
import { UnauthorizedRestError } from '../classes/unauthorized-rest-error';
import { PaymentRequiredRestError } from '../classes/payment-required-rest-error';
import { ForbiddenRestError } from '../classes/forbidden-rest-error';
import { NotFoundRestError } from '../classes/not-found-rest-error';
import { MethodNotAllowedRestError } from '../classes/method-not-allowed-rest-error';
import { NotAcceptableRestError } from '../classes/not-acceptable-rest-error';
import { ProxyAuthenticationRequiredRestError } from '../classes/proxy-authentication-required-rest-error';
import { RequestTimeOutRestError } from '../classes/request-time-out-rest-error';
import { ConflictRestError } from '../classes/conflict-rest-error';
import { GoneRestError } from '../classes/gone-rest-error';
import { LengthRequiredRestError } from '../classes/length-required-rest-error';
import { PreconditionFailedRestError } from '../classes/precondition-failed-rest-error';
import { RequestEntityTooLargeRestError } from '../classes/request-entity-too-large-rest-error';
import { RequestUriTooLongRestError } from '../classes/request-uri-too-long-rest-error';
import { UnsupportedMediaTypeRestError } from '../classes/unsupported-media-type-rest-error';
import { RequestRangeUnsatisfiableRestError } from '../classes/request-range-unsatisfiable-rest-error';
import { ExpectationFailedRestError } from '../classes/expectation-failed-rest-error';
import { InternalServerErrorRestError } from '../classes/internal-server-error-rest-error';
import { NotImplementedRestError } from '../classes/not-implemented-rest-error';
import { BadGatewayRestError } from '../classes/bad-gateway-rest-error';
import { ServiceUnavailableRestError } from '../classes/service-unavailable-rest-error';
import { GatewayTimeOutRestError } from '../classes/gateway-time-out-rest-error';
import { HTTPVersionNotSupportedRestError } from '../classes/http-version-not-supported-rest-error';

export const map: Map<StatusCode, Utils.TConstructible<RestError>> = new Map<StatusCode, Utils.TConstructible<RestError>>([
  [StatusCode.BAD_REQUEST, BadRequestRestError],
  [StatusCode.UNAUTHORIZED, UnauthorizedRestError],
  [StatusCode.PAYMENT_REQUIRED, PaymentRequiredRestError],
  [StatusCode.FORBIDDEN, ForbiddenRestError],
  [StatusCode.NOT_FOUND, NotFoundRestError],
  [StatusCode.METHOD_NOT_ALLOWED, MethodNotAllowedRestError],
  [StatusCode.NOT_ACCEPTABLE, NotAcceptableRestError],
  [StatusCode.PROXY_AUTHENTICATION_REQUIRED, ProxyAuthenticationRequiredRestError],
  [StatusCode.REQUEST_TIME_OUT, RequestTimeOutRestError],
  [StatusCode.CONFLICT, ConflictRestError],
  [StatusCode.GONE, GoneRestError],
  [StatusCode.LENGTH_REQUIRED, LengthRequiredRestError],
  [StatusCode.PRECONDITION_FAILED, PreconditionFailedRestError],
  [StatusCode.REQUEST_ENTITY_TOO_LARGE, RequestEntityTooLargeRestError],
  [StatusCode.REQUEST_URI_TOO_LONG, RequestUriTooLongRestError],
  [StatusCode.UNSUPPORTED_MEDIA_TYPE, UnsupportedMediaTypeRestError],
  [StatusCode.REQUEST_RANGE_UNSATISFIABLE, RequestRangeUnsatisfiableRestError],
  [StatusCode.EXPECTATION_FAILED, ExpectationFailedRestError],
  [StatusCode.INTERNAL_SERVER_ERROR, InternalServerErrorRestError],
  [StatusCode.NOT_IMPLEMENTED, NotImplementedRestError],
  [StatusCode.BAD_GATEWAY, BadGatewayRestError],
  [StatusCode.SERVICE_UNAVAILABLE, ServiceUnavailableRestError],
  [StatusCode.GATEWAY_TIME_OUT, GatewayTimeOutRestError],
  [StatusCode.HTTP_VERSION_NOT_SUPPORTED, HTTPVersionNotSupportedRestError]
]);