import { Type } from '@angular/core';
import { PaymentDetails } from '../models/paymentdetails';
/**
 * Validates the payment details model
 */
export class PaymentValidation {
  private static _validationErrors: string = '';

  constructor() {}

  static validate(paymentDetails: PaymentDetails): boolean {
    let isValid = false;

    if (paymentDetails == null) {
      this._validationErrors = `'paymentDetails' parameter cannot be null at class PaymentValidation`;
      throw new Error(this._validationErrors);
    }

    if (paymentDetails.name == '') {
      this._validationErrors = 'Name cannot be empty';
    } else if (
      isNaN(paymentDetails.price) ||
      isNaN(paymentDetails.cardnumber)
    ) {
      this._validationErrors = 'Invalid Price or Card Number';
    } else if (paymentDetails.price <= 0) {
      this._validationErrors = 'Price cannot be zero or less';
    } else if (paymentDetails.cardnumber == 0) {
      this._validationErrors = 'Card Number cannot be zero';
    } else if (paymentDetails.cardnumber.toString().length < 15) {
      this._validationErrors = 'Invalid Card Number';
    } else isValid = true;

    return isValid;
  }

  static get ValidationError(): string {
    return this._validationErrors;
  }
}
