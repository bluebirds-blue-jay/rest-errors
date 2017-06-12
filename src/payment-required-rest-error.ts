import * as StatusCode from '@bluejay/status-code';

import { AbstractRestError } from './abstract-rest-error';

export class PaymentRequiredRestError extends AbstractRestError {
  public readonly statusCode = StatusCode.PAYMENT_REQUIRED;
}

export default PaymentRequiredRestError;