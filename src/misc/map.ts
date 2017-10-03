import { StatusCode, TStatusCode } from '@bluejay/status-code';
import * as Utils from '@bluejay/utils';
import { RestError } from '../classes/rest-error';
import * as Classes from '../classes';

export const map: Map<TStatusCode, Utils.TConstructible<RestError>> = new Map([
  [StatusCode.BAD_REQUEST, Classes.BadRequestRestError],
  [StatusCode.UNAUTHORIZED, Classes.UnauthorizedRestError],
  [StatusCode.PAYMENT_REQUIRED, Classes.PaymentRequiredRestError],
  [StatusCode.FORBIDDEN, Classes.ForbiddenRestError],
  [StatusCode.NOT_FOUND, Classes.NotFoundRestError],
  [StatusCode.METHOD_NOT_ALLOWED, Classes.MethodNotAllowedRestError],
  [StatusCode.NOT_ACCEPTABLE, Classes.NotAcceptableRestError],
  [StatusCode.PROXY_AUTHENTICATION_REQUIRED, Classes.ProxyAuthenticationRequiredRestError],
  [StatusCode.REQUEST_TIME_OUT, Classes.RequestTimeOutRestError],
  [StatusCode.CONFLICT, Classes.ConflictRestError],
  [StatusCode.GONE, Classes.GoneRestError],
  [StatusCode.LENGTH_REQUIRED, Classes.LengthRequiredRestError],
  [StatusCode.PRECONDITION_FAILED, Classes.PreconditionFailedRestError],
  [StatusCode.REQUEST_ENTITY_TOO_LARGE, Classes.RequestEntityTooLargeRestError],
  [StatusCode.REQUEST_URI_TOO_LONG, Classes.RequestUriTooLongRestError],
  [StatusCode.UNSUPPORTED_MEDIA_TYPE, Classes.UnsupportedMediaTypeRestError],
  [StatusCode.REQUEST_RANGE_UNSATISFIABLE, Classes.RequestRangeUnsatisfiableRestError],
  [StatusCode.EXPECTATION_FAILED, Classes.ExpectationFailedRestError],
  [StatusCode.INTERNAL_SERVER_ERROR, Classes.InternalServerErrorRestError],
  [StatusCode.NOT_IMPLEMENTED, Classes.NotImplementedRestError],
  [StatusCode.BAD_GATEWAY, Classes.BadGatewayRestError],
  [StatusCode.SERVICE_UNAVAILABLE, Classes.ServiceUnavailableRestError],
  [StatusCode.GATEWAY_TIME_OUT, Classes.GatewayTimeOutRestError],
  [StatusCode.HTTP_VERSION_NOT_SUPPORTED, Classes.HTTPVersionNotSupportedRestError]
]);