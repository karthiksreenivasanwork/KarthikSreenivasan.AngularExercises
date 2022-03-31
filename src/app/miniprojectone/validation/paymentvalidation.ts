import { CardNumberHelper } from '../mponeutils/cardnumberhelper';
/**
 * Validates the payment details model
 */
export class PaymentValidation {
  private static _validationErrors: string = '';

  constructor() {}

  static validate(
    nameParam: string,
    priceParam: string,
    cardNumberParam: string
  ): boolean {
    let isValid = false;
    let priceAsNumber: number = Number(priceParam);
    let cardNumberwithoutHyphen: number = Number(
      CardNumberHelper.removeCardNumberWithHyphens(cardNumberParam)
    );

    if (nameParam == '') {
      this._validationErrors = 'Name cannot be empty';
    } else if (isNaN(priceAsNumber) || priceAsNumber <= 0) {
      this._validationErrors = 'Invalid price';
      return isValid;
    } else if (
      isNaN(cardNumberwithoutHyphen) ||
      cardNumberwithoutHyphen == 0 ||
      cardNumberwithoutHyphen < 15
    ) {
      this._validationErrors = 'Invalid card number';
      return isValid;
    } else isValid = true;
    return isValid;
  }

  static get ValidationError(): string {
    return this._validationErrors;
  }
}
