import { Pipe, PipeTransform } from '@angular/core';

import { IPaymentDetails } from '../models/ipaymentdetails';
import { FilterListPayments } from '../mponeutils/mponefilterlistpayments';

@Pipe({
  name: 'mponefilterlistpaymentcount',
  pure: false, //This is because if a new item is added with some search, the results must refresh.
})
export class MponefilterlistpaymentcountPipe implements PipeTransform {
  transform(
    paymentDetailCollection: IPaymentDetails[],
    paymentDetailProperty: string,
    searchValue: string
  ): number {
    let filteredDataSource: IPaymentDetails[] = [];

    if (
      paymentDetailProperty.length > 0 &&
      searchValue.length > 0 &&
      paymentDetailCollection.length > 0
    ) {
      filteredDataSource = FilterListPayments.applyFilter(
        paymentDetailCollection,
        paymentDetailProperty,
        searchValue
      );

      return filteredDataSource.length;
    }
    return paymentDetailCollection.length;
  }
}
