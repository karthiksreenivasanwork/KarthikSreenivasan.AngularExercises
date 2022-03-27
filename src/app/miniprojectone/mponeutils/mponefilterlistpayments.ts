import {
  IPaymentDetails,
  PaymentDetailsKeyValueMapper,
} from '../models/paymentdetails';

/**
 * Instead of using static classes similar to C#, we need to use Abstract classes
 * which perform simimar role in Typescript.
 *
 * For more detials, please refere to the below link:
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

    for (let i = 0; i < paymentDetailCollectionParam.length; i++) {
      let paymentDetailvalue: string = new PaymentDetailsKeyValueMapper(
        paymentDetailCollectionParam[i]
      )
        .getValueFromPropertyName(paymentDetailProperty)
        .toString();

      switch (paymentDetailProperty) {
        case 'price': //Price is always exact match
          if (
            paymentDetailvalue == searchValueParam
          ) {
            filteredPaymentDetailCollection.push(
              paymentDetailCollectionParam[i]
            );
          }
          break;
        default: //Other columns will can match any data that matches the search text.
          if (
            paymentDetailvalue
              .toLowerCase()
              .includes(searchValueParam.toLowerCase())
          ) {
            filteredPaymentDetailCollection.push(
              paymentDetailCollectionParam[i]
            );
          }
      }
    }
    //console.log(JSON.stringify(filteredPaymentDetailCollection));
    return filteredPaymentDetailCollection;
  }
}
