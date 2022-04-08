import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { IProductDetailsModel } from '../ciactivecproducts/iproductdetailsmodel';

const ICON_SWITCHER: string[] = [
  'circle-solid-red.svg',
  'circle-dot-solid.svg',
];

/**
 * Child component.
 * Parent component: Component Interactions - Active Products
 */
@Component({
  selector: 'app-ciinactivecproducts',
  templateUrl: './ciinactivecproducts.component.html',
  styleUrls: ['./ciinactivecproducts.component.scss'],
})
export class CiinactivecproductsComponent {
  @Input() set inputDeactivateProduct(value: IProductDetailsModel) {
    if (value.ProductName.trim() != '') {
      this.inactiveProductCollection.push(value);
    }
  }
  @Output() productActivatedEvent = new EventEmitter();

  inactiveProductCollection: IProductDetailsModel[] = [
    { ProductName: 'Samsung Galaxy Z' },
    { ProductName: 'IPad 10.2' },
    { ProductName: 'IPhone 13 Pro' },
  ];
  inActiveProductLogo: string = '';

  constructor() {
    let currentProductIconIndex = 0;

    this.inActiveProductLogo = ICON_SWITCHER[currentProductIconIndex];
    setInterval(() => {
      if (currentProductIconIndex == 0) currentProductIconIndex = 1;
      else currentProductIconIndex = 0;

      this.inActiveProductLogo = ICON_SWITCHER[currentProductIconIndex];
    }, 1000);
  }

  OnActivateClick(productToActivateParam: IProductDetailsModel) {
    let productLocationAsIndex = this.inactiveProductCollection.findIndex(
      (productFind) => {
        return productFind.ProductName == productToActivateParam.ProductName;
      }
    );

    if (productLocationAsIndex != -1) {
      this.inactiveProductCollection.splice(productLocationAsIndex, 1);
      this.productActivatedEvent.emit(productToActivateParam);
    }
  }
}
