import { Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { IPaymentDetails } from '../models/ipaymentdetails';
import { FilterListPayments } from '../mponeutils/mponefilterlistpayments';

@Pipe({
  name: 'mponefilterlistpayment',
  pure: false, //This is because if a new item is added with some search, the results must refresh.
})
export class MponefilterlistpaymentPipe implements PipeTransform {
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
      return filteredDataSource;
    }
    return paymentDetailCollection;
  }
}
