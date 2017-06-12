export * from './types';
export * from './abstract-rest-error';
export * from './rest-errors';
export { BadRequestRestError, BadRequestRestError as BadRequest } from './bad-request-rest-error';
export { UnauthorizedRestError, UnauthorizedRestError as Unauthorized } from './unauthorized-rest-error';
export { PaymentRequiredRestError, PaymentRequiredRestError as PaymentNotRequired } from './payment-required-rest-error';
export { ForbiddenRestError, ForbiddenRestError as Forbidden } from './forbidden-rest-error';
export { NotFoundRestError, NotFoundRestError as NotFound } from './not-found-rest-error';
export { MethodNotAllowedRestError, MethodNotAllowedRestError as MethodNotAllowed } from './method-not-allowed-rest-error';
export { NotAcceptableRestError, NotAcceptableRestError as NotAcceptable } from './not-acceptable-rest-error';
export { ProxyAuthenticationRequiredRestError, ProxyAuthenticationRequiredRestError as ProxyAuthenticationRequired } from './proxy-authentication-required-rest-error';
export { RequestTimeOutRestError, RequestTimeOutRestError as RequestTimeOut } from './request-time-out-rest-error';
export { ConflictRestError, ConflictRestError as Conflict } from './conflict-rest-error';
export { GoneRestError, GoneRestError as Gone } from './gone-rest-error';
export { LengthRequiredRestError as LengthRequired } from './length-required-rest-error';
export { PreconditionFailedRestError as PreconditionFailed } from './precondition-failed-rest-error';
export { RequestEntityTooLargeRestError as RequestEntityTooLarge } from './request-entity-too-large-rest-error';
export { RequestUriTooLongRestError, RequestUriTooLongRestError as RequestUriTooLong } from './request-uri-too-long-rest-error';
export { UnsupportedMediaTypeRestError, UnsupportedMediaTypeRestError as UnsupportedMediaType } from './unsupported-media-type-rest-error';
export { RequestRangeUnsatisfiableRestError, RequestRangeUnsatisfiableRestError as RequestRangeUnsatisfiable } from './request-range-unsatisfiable-rest-error';
export { ExpectationFailedRestError, ExpectationFailedRestError as ExpectationFailed } from './expectation-failed-rest-error';
export { InternalServerErrorRestError, InternalServerErrorRestError as InternalServerError } from './internal-server-error-rest-error';
export { NotImplementedRestError, NotImplementedRestError as NotImplemented } from './not-implemented-rest-error';
export { BadGatewayRestError, BadGatewayRestError as BadGateway } from './bad-gateway-rest-error';
export { ServiceUnavailableRestError, ServiceUnavailableRestError as ServiceUnavailable } from './service-unavailable-rest-error';
export { GatewayTimeOutRestError, GatewayTimeOutRestError as GatewayTimeOut } from './gateway-time-out-rest-error';
export { HTTPVersionNotSupportedRestError, HTTPVersionNotSupportedRestError as HTTPVersionNotSupported } from './http-version-not-supported-rest-error';
