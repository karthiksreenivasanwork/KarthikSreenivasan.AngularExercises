import { Injectable } from '@angular/core';

import { ProductDetails } from '../models/productdetails';

/**
 * Injectable makes it so that, only if this is really used, will it be considered for
 * deployment. This way, the management of the service runtime is taken care of by
 * Angular itself.
 */
@Injectable({
  providedIn: 'root',
})
export class MponeuserService {
  productCollection: ProductDetails[] = [];

  constructor() {
    this.productCollection = [
      {
        position: 1,
        name: 'Karthik',
        price: 1000,
        cardnumber: 2233445566778899
      },
      {
        position: 2,
        name: 'Shiva',
        price: 2000,
        cardnumber: 7788445566778845
      },
    ];
  }

  getProductDetails(): ProductDetails[] {
    return this.productCollection;
  }

  addProductDetails(productDetails: ProductDetails) {
    this.productCollection.push(productDetails);
  }
}
