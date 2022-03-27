import { Pipe, PipeTransform } from '@angular/core';

/**
 * Updates the inputs string to return a new value where the first
 * letter of the word is a capital letter.
 * Example: Name of a person always starts with a capital letter.
 */
@Pipe({
  name: 'firstletteruppercase',
})
export class FirstletteruppercasePipe implements PipeTransform {
  transform(inputValueParam: string): string {
    let firstLetterAsCapital: string = '';

    if (inputValueParam.length > 0) {
      let firstLetter = inputValueParam.charAt(0);
      let regexOnlyCharacters = new RegExp('[a-z]');

      if (regexOnlyCharacters.test(firstLetter)) {
        firstLetterAsCapital =
          firstLetter.toUpperCase() +
          inputValueParam.substring(1, inputValueParam.length - 1);
        return firstLetterAsCapital;
      }
    }
    return inputValueParam;
  }
}
