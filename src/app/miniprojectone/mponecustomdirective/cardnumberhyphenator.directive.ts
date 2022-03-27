import { Directive, ElementRef, HostListener } from '@angular/core';
import { CardNumberHelper } from '../mponeutils/cardnumberhelper';
/**
 * Custom directive to hyphenate a card number at 4 digit intervals.
 * Specs
 * -----
 * Card number length: 16 digits.
 * Total hyphens - 3 characters for a 16 digit card number.
 * Max character length : 19 including hyphens
 * Anything beyond 19 characters will be limited to 19 characters.
 */
@Directive({
  selector: '[appCardnumberhyphenator]',
})
export class CardnumberhyphenatorDirective {
  constructor(public elementReferenceService: ElementRef) {}

  @HostListener('keypress') onInputCardNumberKeyUp() {
    //This is equivalent to - document.getElementByID in Javascript.
    let cardNumberValue: string =
      this.elementReferenceService.nativeElement.value;

    //Gets the last index of a hyphen if applicable.
    var index = cardNumberValue.lastIndexOf('-');
    //Get the characters from the last hyphen.
    var test = cardNumberValue.substring(index + 1);
    //Max of 3 hyphens only. By 9th index of the hyphen there would be two.
    if (test.length == 4 && index <= 9) {
      this.elementReferenceService.nativeElement.value = cardNumberValue + '-';
    }
  }
}
