import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ttordinalpipe',
})
export class TtordinalpipePipe implements PipeTransform {
  transform(value: string): string {
    let returnValue: string = value;

    if (returnValue == '') return 'Not available';
    if (isNaN(+returnValue)) return 'Error: Input not a number';

    let numericValue = +returnValue;
    let reminder = numericValue % 10;
    //Log the exception numbers logic from the below link
    //https://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number
    let exceptionReminder = numericValue % 100;

    if (reminder == 1 && exceptionReminder != 11)
      returnValue = `${returnValue}st`;
    else if (reminder == 2 && exceptionReminder != 12)
      returnValue = `${returnValue}nd`;
    else if (reminder == 3 && exceptionReminder != 13)
      returnValue = `${returnValue}rd`;
    else returnValue = `${returnValue}th`;

    return returnValue;
  }
}
