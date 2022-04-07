import { Pipe, PipeTransform } from '@angular/core';

const FA_VISA_CARD_IMAGE_CLASS_NAME = 'cc-visa-brands.svg';
const FA_MASTER_CARD_IMAGE_CLASS_NAME = 'cc-mastercard-brands.svg';

/**
 * Returns the card image based on the first 2 digits of a card number.
 */
@Pipe({
  name: 'cardimageselector',
})
export class CardimageselectorPipe implements PipeTransform {
  transform(cardNumber: string, imagePath: string): string {
    let faImageName = '';
    if (cardNumber != undefined && cardNumber.length > 1) {
      let firstTwoNumbers: number = Number(cardNumber.substring(0, 2));
      if (!isNaN(firstTwoNumbers)) {
        if (firstTwoNumbers >= 50)
          faImageName = `${imagePath}${FA_VISA_CARD_IMAGE_CLASS_NAME}`;
        else faImageName = `${imagePath}${FA_MASTER_CARD_IMAGE_CLASS_NAME}`;
      }
    }
    return faImageName;
  }
}
