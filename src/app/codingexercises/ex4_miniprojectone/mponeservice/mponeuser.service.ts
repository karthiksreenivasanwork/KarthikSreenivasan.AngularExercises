import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { IPaymentDetails } from '../models/ipaymentdetails';

/**
 * Injectable makes it so that, only if this is really used, will it be considered for
 * deployment. This way, the management of the service runtime is taken care of by
 * Angular itself.
 */
@Injectable({
  providedIn: 'root',
})
export class MponeuserService {
  @Output() onPaymentEditedEvent = new EventEmitter<IPaymentDetails>();

  private _paymentCollection: IPaymentDetails[] = [];
  private _rowIndex: number = 0;

  /**
   * Emits the collection from this service whenever we need to update the subscribers.
   *
   * Subject
   * -------
   *
   * A Subject is a special type of Observable that allows values to be
   * multicasted to many Observers. Subjects are like EventEmitters.
   *
   * Every Subject is an Observable and an Observer. You can subscribe to a
   * Subject, and you can call next to feed values as well as error and complete.
   *
   * https://stackoverflow.com/questions/61628426/angular-7-service-not-updating-the-page-dynamically-its-getting-updated-after
   */
  private _paymentCollectionObservable = new Subject<IPaymentDetails[]>();
  /**
   * Returns the payment as an observable collection
   * @returns Returns an obervable collection of the payment details.
   */
  getAllPayments(): Subject<IPaymentDetails[]> {
    return this._paymentCollectionObservable;
  }

  /**
   * Add a new payment information.
   * @param name Name information
   * @param price Price information
   * @param cardnumber Card number information
   * @returns True if the payment details were successfully recorded and false otherwise.
   */
  addPaymentDetails(name: string, price: number, cardnumber: string): boolean {
    let hasPaymentAdded = false;

    try {
      this._rowIndex += 1;
      this._paymentCollection.push({
        position: this._rowIndex,
        name: name,
        price: price,
        cardnumber: cardnumber,
      });
      /**
       * Once the product is added, we are emmiting the data to the subscribers using Subject concept.
       * https://stackoverflow.com/questions/61628426/angular-7-service-not-updating-the-page-dynamically-its-getting-updated-after
       */
      this._paymentCollectionObservable.next(this._paymentCollection);

      hasPaymentAdded = true;
    } catch (exceptionRef) {}

    return hasPaymentAdded;
  }

  /**
   * Update an existing payment information.
   * @param paramPosition Unique row index that identifies the record to edit.
   * @param name Name information
   * @param price Price information
   * @param cardnumber Card number information
   * @returns True if the payment details were successfully recorded and false otherwise.
   */
  updatePaymentDetails(
    paramPosition: number,
    paramName: string,
    paramPrice: number,
    paramCardnumber: string
  ): boolean {
    let hasPaymentUpdated = false;

    try {
      let index = this._paymentCollection.findIndex((productDetail) => {
        return productDetail.position == paramPosition;
      });

      if (index != -1) {
        this._paymentCollection[index].name = paramName;
        this._paymentCollection[index].price = paramPrice;
        this._paymentCollection[index].cardnumber = paramCardnumber;
        hasPaymentUpdated = true;
      }
    } catch (exceptionRef) {
      console.log(`Exception at updatePaymentDetails- ${exceptionRef}`);
    }

    return hasPaymentUpdated;
  }

  /**
   * Remove a payment detail from the collection based on the payer's name.
   * @param name Payer's name
   * @returns True if the removal was successful and false otherwise.
   */
  removePaymentDetail(name: string): boolean {
    let hasPaymentDetailDeleted: boolean = false;

    var deleteIndex = -1;
    /**
     * The difference between filter and some is that
     * the filter method iterates through all elements even if found
     * but the some does not which makes it a lot faster.
     */
    let productDetail = this._paymentCollection.some((paymentDetail, index) => {
      deleteIndex = index;
      return paymentDetail.name == name;
    });

    if (!productDetail) {
      return hasPaymentDetailDeleted;
    } else {
      this._paymentCollection.splice(deleteIndex, 1);
      hasPaymentDetailDeleted = true;
    }

    this._paymentCollectionObservable.next(this._paymentCollection);

    return hasPaymentDetailDeleted;
  }

  /**
   * Get the total count of all the products
   */
  public get TotalPaymentCount(): number {
    return this._paymentCollection.length;
  }

  clearPaymentData() {
    if (this._paymentCollection.length > 0) {
      this._paymentCollection = [];
    }
  }

  /**
   * Helps change detection with relevant data between listpayment and add payment component when the edit buton is clicked
   * @param paymentDetailsToUpdate Payment details to update
   */
  onPaymentEdited(paymentDetailsToUpdate: IPaymentDetails) {
    /**
     * How to invoke an event from one component to another ?
     * Solution: Service
     * Link: https://stackoverflow.com/questions/52413873/angular-invoking-a-function-in-one-component-with-events-on-another-component
     */
    this.onPaymentEditedEvent.emit(paymentDetailsToUpdate);
  }
}
