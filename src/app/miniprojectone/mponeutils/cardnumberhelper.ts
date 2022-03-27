/**
 * Helper class for formatting card numbers.
 */
export abstract class CardNumberHelper {
  /**
   * This function hyphenates a card number at 4 digit intervals.
   * Specs
   * -----
   * Card number length: 16 digits.
   * Total hyphens - 3 characters for a 16 digit card number.
   * Max character length : 19 including hyphens
   * Anything beyond 19 characters will be limited to 19 characters.
   * @param cardNumberParam card number value
   * @returns Hyphenated card number
   */
  static getCardNumberWithHyphens(cardNumberParam: string): string {
    let hyphenatedCardNumberValue = '';
    for (let i = 0, j = i + 1; i < cardNumberParam.length; i++, j++) {
      hyphenatedCardNumberValue += cardNumberParam.charAt(i);
      if (j % 4 == 0 && j < 16) {
        hyphenatedCardNumberValue += '-';
      }
    }
    return hyphenatedCardNumberValue;
  }

  /**
   * Removes any hyphens in a formatted card number value.
   * @param cardNumberParam Card number formatted with hyphens
   * @returns Card number without any formats.
   */
  static removeCardNumberWithHyphens(cardNumberParam: string): string {
    return cardNumberParam.replace(/-/g, '');
  }
}
