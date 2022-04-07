import { Pipe, PipeTransform } from '@angular/core';

/**
 * Returns an input string in the reverse order.
 */
@Pipe({
  name: 'ttreversestring',
})
export class TtreversestringPipe implements PipeTransform {
  transform(inputValue: string): string {

    /**
     * Todo - Gopi Sir - 
     * Step 1: Split the string split('')
     * Step 2: split('').reverse
     * Step 3: Join
     */
    // let reversedString: string = '';
    // let words: string[] = inputValue.split(' ').reverse().join();

    // if (words.length > 0) {
    //   for (let i = 0; i < words.length; i++) {
    //     reversedString += `${this.reverseAWord(words[i])} `;
    //   }
    // }
    return inputValue.split(' ').reverse().join().replace(/,/g, ' ');
  }

  private reverseAWord(inputWordParam: string): string {
    let reversedWord: string = '';
    for (let i = inputWordParam.length; i >= 0; i--) {
      reversedWord += inputWordParam.charAt(i);
    }
    return reversedWord;
  }
}
