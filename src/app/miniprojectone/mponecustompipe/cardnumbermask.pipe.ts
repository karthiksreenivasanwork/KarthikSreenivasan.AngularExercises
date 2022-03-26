import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardnumbermask',
})
export class CardnumbermaskPipe implements PipeTransform {
  transform(cardNumber: number): string {
    let cardNumberWithMask: string = this.maskLastFourDigits(
      cardNumber.toString()
    );
    return cardNumberWithMask;
  }

  private maskLastFourDigits(cardNumberAsString: string): string {
    let cardNumberWithMask: string = '';
    let endIndex: number = cardNumberAsString.length - 1;
    for (let i = 0; i <= endIndex; i++) {
      if (endIndex - i < 4) {
        cardNumberWithMask += cardNumberAsString.charAt(i);
      } else cardNumberWithMask += 'X';
    }
    return cardNumberWithMask;
  }
}
