import { Pipe, PipeTransform } from '@angular/core';

const FA_VISA_CARD_IMAGE_CLASS_NAME = 'fa-cc-visa';
const FA_MASTER_CARD_IMAGE_CLASS_NAME = 'fa-cc-mastercard';

@Pipe({
  name: 'cardimageselector',
})
export class CardimageselectorPipe implements PipeTransform {
  transform(cardNumber: string): string {
    let faClassImage = '';
    if (cardNumber.length > 1) {
      let firstTwoNumbers = Number(cardNumber.substring(0, 2));
      if (firstTwoNumbers >= 50) faClassImage = FA_VISA_CARD_IMAGE_CLASS_NAME;
      else faClassImage = FA_MASTER_CARD_IMAGE_CLASS_NAME;
    }
    return faClassImage;
  }
}
