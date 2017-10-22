import { StatusCode } from '@bluejay/status-code';

import { RestError } from './rest-error';

export class PaymentRequiredRestError extends RestError {
  public readonly statusCode = StatusCode.PAYMENT_REQUIRED;
}

export default PaymentRequiredRestError;