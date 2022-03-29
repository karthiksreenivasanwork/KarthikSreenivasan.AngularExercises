import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ttreversestring',
})
export class TtreversestringPipe implements PipeTransform {
  transform(inputValue: string): string {
    let reversedString: string = '';
    let words: string[] = inputValue.split(' ');

    if (words.length > 0) {
      for (let i = 0; i < words.length; i++) {
        reversedString += `${this.reverseAWord(words[i])} `;
      }
    }
    return reversedString;
  }

  private reverseAWord(inputWordParam: string): string {
    let reversedWord: string = '';
    for (let i = inputWordParam.length; i >= 0; i--) {
      reversedWord += inputWordParam.charAt(i);
    }
    return reversedWord;
  }
}
