import { Pipe, PipeTransform } from '@angular/core';
import { CardNumberHelper } from '../mponeutils/cardnumberhelper';

/**
 * Returns the card number with a hyphen based separation every 4 digits.
 */
@Pipe({
  name: 'cardnumberhyphenator',
})
export class CardnumberhyphenatorPipe implements PipeTransform {
  transform(cardNumberParam: string): string {
    return CardNumberHelper.getCardNumberWithHyphens(cardNumberParam);
  }
}
