import { Pipe, PipeTransform } from '@angular/core';
import { CardNumberHelper } from '../mponeutils/cardnumberhelper';

@Pipe({
  name: 'cardnumberhyphenator',
})
export class CardnumberhyphenatorPipe implements PipeTransform {
  transform(cardNumberParam: string): string {
    return CardNumberHelper.getCardNumberWithHyphens(cardNumberParam);
  }
}
