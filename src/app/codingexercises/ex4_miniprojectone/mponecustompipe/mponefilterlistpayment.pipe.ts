import { Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { IPaymentDetails } from '../models/ipaymentdetails';
import { MponeuserService } from '../mponeservice/mponeuser.service';
import { FilterListPayments } from '../mponeutils/mponefilterlistpayments';

/**
 * Returns the filtered payment collection based on the input criteria.
 */
@Pipe({
  name: 'mponefilterlistpayment',
})
export class MponefilterlistpaymentPipe implements PipeTransform {
  constructor(public userService: MponeuserService) {}

  transform(
    paymentDetailCollection: MatTableDataSource<IPaymentDetails>,
    paymentDetailProperty: string,
    searchValue: string
  ): MatTableDataSource<IPaymentDetails> {
    let filteredDataSource: MatTableDataSource<IPaymentDetails> =
      new MatTableDataSource<IPaymentDetails>();

    if (
      paymentDetailProperty.length > 0 &&
      searchValue.length > 0 &&
      paymentDetailCollection.data.length > 0
    ) {
      filteredDataSource.data = FilterListPayments.applyFilter(
        paymentDetailCollection.data,
        paymentDetailProperty,
        searchValue
      );
      this.userService.setFilteredCount(filteredDataSource.data.length);
      return filteredDataSource;
    }
    return paymentDetailCollection;
  }
}
