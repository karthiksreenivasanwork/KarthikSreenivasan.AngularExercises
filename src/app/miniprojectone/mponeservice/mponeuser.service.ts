import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { PaymentDetails } from '../models/paymentdetails';

/**
 * Injectable makes it so that, only if this is really used, will it be considered for
 * deployment. This way, the management of the service runtime is taken care of by
 * Angular itself.
 */
@Injectable({
  providedIn: 'root',
})
export class MponeuserService {
  private _paymentCollection: PaymentDetails[] = [];
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
  private _paymentCollectionObservable = new Subject<PaymentDetails[]>();

  constructor() {}

  getAllPayments(): Subject<PaymentDetails[]> {
    return this._paymentCollectionObservable;
  }

  addPaymentDetails(name: string, price: number, cardnumber: number): boolean {
    let hasPaymentAdded = false;

    try {
      this._paymentCollection.push({
        position: this._paymentCollection.length + 1,
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
    let productDetail = this._paymentCollection.some(
      (paymentDetail, index) => {
        deleteIndex = index;
        return paymentDetail.name == name;
      }
    );

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
}
