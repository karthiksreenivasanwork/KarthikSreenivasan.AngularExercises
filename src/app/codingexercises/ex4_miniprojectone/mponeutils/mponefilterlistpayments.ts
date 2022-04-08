import {
  IPaymentDetails,
  PaymentDetailsKeyValueMapper,
} from '../models/ipaymentdetails';

/**
 * Instead of using static classes similar to C#, we need to use Abstract classes
 * which perform similar role in Typescript.
 *
 * For more details, please refer to the below link:
 * https://stackoverflow.com/questions/13212521/typescript-static-classes
 *
 * Solution: Abstract classes have been a first-class citizen of TypeScript since TypeScript 1.6.
 * You cannot instantiate an abstract class.
 */
export abstract class FilterListPayments {
  static applyFilter(
    paymentDetailCollectionParam: IPaymentDetails[],
    paymentDetailProperty: string,
    searchValueParam: string
  ): IPaymentDetails[] {
    if (paymentDetailProperty.length == 0 || searchValueParam.length == 0)
      return paymentDetailCollectionParam;

    let filteredPaymentDetailCollection: IPaymentDetails[] = [];

    for (let paymentDetail of paymentDetailCollectionParam) {
      let paymentDetailvalue: string = new PaymentDetailsKeyValueMapper(
        paymentDetail
      )
        .getValueFromPropertyName(paymentDetailProperty)
        .toString();

      switch (paymentDetailProperty) {
        case 'price': //Price is always exact match
          if (paymentDetailvalue == searchValueParam) {
            filteredPaymentDetailCollection.push(paymentDetail);
          }
          break;
        case 'name':
        case 'cardnumber':
          if (
            paymentDetailvalue
              .toLowerCase()
              .includes(searchValueParam.toLowerCase())
          ) {
            filteredPaymentDetailCollection.push(paymentDetail);
          }
          break;
      }
    }
    return filteredPaymentDetailCollection;
  }
}
