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
       * Issue: Original reference used due to which which I experienced an issue in the 
       * ngOnChanges event.
       * 
       * Code Snippet with Issue: this.productToDeactivate = productToDeactivateParam;
       * 
       * Solution: Create a new reference of the object of type IProductDetailsModel to 
       * trigger change detection property.
       * ----------------------------------
       * Code Snippet with Solution: this.productToDeactivate = Object.assign({}, productToDeactivateParam);
       * Link: https://stackoverflow.com/questions/55050015/ngonchanges-not-firing-if-an-input-is-receiving-an-object
       * 
       * The OnChanges lifecycle hook is triggered when the @Input property value changes. 
       * In the case of an object, that value is the object reference. If the object reference does not change, OnChanges is not triggered.
       * A possible technique to force change detection is to set a new object reference after modifying the property values:
       * 
       * this.whatever.value1 = 2;
       * this.whatever.value2 = 3;
       * this.whatever = Object.assign({}, this.whatever); //Object Cloning

       * MY EXPERIENCE: IF WE DIRECTLY USE ORIGINAL OBJECT REFERENCE, ngOnChanges DEFINED IN THE CHILD COMPONENT 
       * CiinactivecproductsComponent DOES NOT FIRE PROPERTY LEADING TO PRODUCTS
       * GETTING REMOVED FROM ACTIVE PRODUCTS AND NOT GETTING ADDED TO INACTIVE PRODUCTS
       * AS THE CHANGE DETECTION DID NOT FIRE.
       * 
       * The above is also applicable to set method.
       */

      //this.productToDeactivate = productToDeactivateParam; //CODE WITH ISSUE FOR LEARNING PURPOSES AND TRIAL
      this.productToDeactivate = Object.assign({}, productToDeactivateParam); //CODE ISSUE FIXED HERE.
    }
  }

  OnProductActivated(productToActivate: any) {
    this.activeProductCollection.push(productToActivate);
  }
}
