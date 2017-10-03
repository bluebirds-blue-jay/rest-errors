import { RestError } from '../classes/rest-error';

export function isRestError(err: any): err is RestError {
  return err instanceof RestError;
}