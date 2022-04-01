import { Component, OnInit } from '@angular/core';
import { IProductDetailsModel } from './iproductdetailsmodel';

const ICON_SWITCHER: string[] = [
  'circle-solid-green.svg',
  'circle-dot-solid.svg',
];

/**
 * Parent component.
 * Child component: Component Interactions - Inactive Products
 */
@Component({
  selector: 'app-ciactivecproducts',
  templateUrl: './ciactivecproducts.component.html',
  styleUrls: ['./ciactivecproducts.component.scss'],
})
export class CiactivecproductsComponent implements OnInit {
  activeProductCollection: IProductDetailsModel[] = [
    { ProductName: 'IPhone 13' },
    { ProductName: 'Samsung Galaxy Note' },
    { ProductName: 'Google Pixel 6' },
  ];
  productToDeactivate: IProductDetailsModel = { ProductName: '' };

  activeProductLogo: string = '';

  constructor() {
    let currentProductIconIndex = 0;
    this.activeProductLogo = ICON_SWITCHER[currentProductIconIndex];
    setInterval(() => {
      currentProductIconIndex == 0
        ? (currentProductIconIndex = 1)
        : (currentProductIconIndex = 0);

      this.activeProductLogo = ICON_SWITCHER[currentProductIconIndex];
    }, 1000);
  }

  ngOnInit(): void {}

  onDeActivateClick(productToDeactivateParam: IProductDetailsModel) {
    let productLocationAsIndex = this.activeProductCollection.findIndex(
      (productFind) => {
        return productFind.ProductName == productToDeactivateParam.ProductName;
      }
    );
    if (productLocationAsIndex != -1) {
      this.activeProductCollection.splice(productLocationAsIndex, 1);
      /**
       * Force change detection of @Input with new object reference.
       * Link: https://stackoverflow.com/questions/55050015/ngonchanges-not-firing-if-an-input-is-receiving-an-object
       * 
       * The OnChanges lifecycle hook is triggered when the @Input property value changes. 
       * In the case of an object, that value is the object reference. If the object reference does not change, OnChanges is not triggered.
       * A possible technique to force change detection is to set a new object reference after modifying the property values:
       */
      this.productToDeactivate = Object.assign({}, productToDeactivateParam); //CODE ISSUE FIXED HERE.
    }
  }

  OnProductActivated(productToActivate: any) {
    this.activeProductCollection.push(productToActivate);
  }
}
