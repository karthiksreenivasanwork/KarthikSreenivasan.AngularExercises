/**
 * Defines the structure of Payment Detail model.
 */
export interface IPaymentDetails {
  position: number;
  name: string;
  price: number;
  /**
   * Changed from number datatype to string due to the following behavior during number conversion
   * Number datatype changes card # - 9999-9999-9999-9999 to the next 1000-0000-0000-0000-0 
   */
  cardnumber: string;
}

/**
 * Usually if we want the property value from an object, we mention the following
 * let objectValue = objectCollection[elementIndex]['propertyname'];
 *
 * But what if the 'propertyname' used above comes via a variable.
 * Then if we use the same syntax, we get the following error
 *
 * This class helps get the value of the object of the interface type IPaymentDetails from a variable.
 * Error :Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'IPaymentDetails'.
 *
 * In order to overcome this, we are implementing the below class to map the property name defined  in the
 * IPaymentDetails and get the value from a variable definition by performing a mapping using
 * "as keyof" syntax.
 *
 * Example: Here paymentDetailProperty is a string variable that holds the property name  as string.
 * 
 *  let paymentDetailvalue = new PaymentDetailsKeyValueMapper(
        paymentDetailCollectionParam[i]
      ).getValueFromPropertyName(paymentDetailProperty);

 * https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
 */
export class PaymentDetailsKeyValueMapper {
  constructor(private data: IPaymentDetails) {}

  getValueFromPropertyName(propertyName: string): string | number {
    return this.data[propertyName as keyof IPaymentDetails];
  }
}
