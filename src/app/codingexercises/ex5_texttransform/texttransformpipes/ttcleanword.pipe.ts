import { Pipe, PipeTransform } from '@angular/core';

const badWordList: string[] = ['badword1', 'badword2'];

/**
 * Masks the input string if bad words are found.
 * Mask rule is masking all letters except the first and the last letter.
 */
@Pipe({
  name: 'ttcleanword',
})
export class TtcleanwordPipe implements PipeTransform {
  transform(value: string): string {
    let inputSentence = value.toLowerCase();
    let outputSentence: string = inputSentence;

    badWordList.forEach((badword) => {
      if (inputSentence.includes(badword)) {
        outputSentence = outputSentence.replace(
          badword,
          this.censorWord(badword)
        );
      }
    });
    return outputSentence;
  }

  private censorWord(inputBadWord: string): string {
    console.log(`Start Character ${inputBadWord.charAt(0)}`);
    console.log(
      `Mid Character ${inputBadWord.substring(1, inputBadWord.length - 1)}`
    );
    console.log(
      `End Character ${inputBadWord.charAt(inputBadWord.length - 1)}`
    );

    let censorRange = inputBadWord.length - 2;
    return `
    ${inputBadWord.charAt(0)}
    ${'*'.repeat(censorRange)}
    ${inputBadWord.charAt(inputBadWord.length - 1)}
    `;
  }
}
