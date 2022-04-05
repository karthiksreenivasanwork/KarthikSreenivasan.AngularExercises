import { Pipe, PipeTransform } from '@angular/core';

const FA_VISA_CARD_IMAGE_CLASS_NAME = 'fa-cc-visa';
const FA_MASTER_CARD_IMAGE_CLASS_NAME = 'fa-cc-mastercard';

/**
 * Returns the card image based on the first 2 digits of a card number.
 */
@Pipe({
  name: 'cardimageselector',
})
export class CardimageselectorPipe implements PipeTransform {
  transform(cardNumber: string): string {
    let faClassImage = '';
    if (cardNumber != undefined && cardNumber.length > 1) {
      let firstTwoNumbers: number = Number(cardNumber.substring(0, 2));
      console.log(isNaN(firstTwoNumbers));
      if (!isNaN(firstTwoNumbers)) {
        if (firstTwoNumbers >= 50) faClassImage = FA_VISA_CARD_IMAGE_CLASS_NAME;
        else faClassImage = FA_MASTER_CARD_IMAGE_CLASS_NAME;
      }
    }
    return faClassImage;
  }
}
