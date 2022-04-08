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
    return inputValue.split(' ').reverse().join().replace(/,/g, ' ');
  }
}
