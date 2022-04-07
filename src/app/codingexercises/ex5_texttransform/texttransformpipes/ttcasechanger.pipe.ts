import { Pipe, PipeTransform } from '@angular/core';
import { TTUtuls } from './ttutils';

const TITLE_EXCEPTION_STRINGS: string[] = [
  'are',
  'in',
  'was',
  'to',
  'of',
  'with',
  'the',
];

/**
 * Returns a string either in camel case or title case.
 */
@Pipe({
  name: 'ttcasechanger',
})
export class TtCaseChangerPipe implements PipeTransform {
  transform(inputSentenceParam: string, transformationType: string): string {
    let inputSentence: string = inputSentenceParam;
    let words: string[] = inputSentence.split(' ');
    let transformedSentence: string = '';
    let spaceHolder: string = ' ';

    for (let i = 0; i < words.length; i++) {
      if (!this.isWordExcempted(words[i])) {
        if (transformationType == TTUtuls.CAMEL_CASE_PARAM && i == 0) {
          transformedSentence += `${words[i]}`;
          spaceHolder = ''; //No space between words with camel case.
          continue;
        }

        if (words[i].length > 0)
          transformedSentence += `${words[i].charAt(0).toUpperCase()}${words[
            i
          ].replace(words[i].charAt(0), '')}${spaceHolder}`;
        console.log(transformedSentence);
      } else {
        transformedSentence += `${words[i]}${spaceHolder}`;
      }
    }
    return transformedSentence.trimEnd();
  }

  private isWordExcempted(wordToVerify: string): boolean {
    let isExceptionWord = false;
    for (let i = 0; i < TITLE_EXCEPTION_STRINGS.length; i++) {
      if (wordToVerify.toLowerCase() == TITLE_EXCEPTION_STRINGS[i]) {
        isExceptionWord = true;
        console.log(TITLE_EXCEPTION_STRINGS[i]);
        break;
      }
    }
    return isExceptionWord;
  }
}
