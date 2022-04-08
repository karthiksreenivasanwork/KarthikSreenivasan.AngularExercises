import { Component, OnInit } from '@angular/core';

/**
 * Ex# 1: Binding
 * Dashboard that mocks adding or removing a product from a shopping cart.
 */
@Component({
  selector: 'app-producttracking',
  templateUrl: './producttracking.component.html',
  styleUrls: ['./producttracking.component.scss']
})
export class ProducttrackingComponent {

  itemsInTheCart: number = 0;
  errorMessage: string = "";

  onAddProductClick() {
    if (this.itemsInTheCart >= 0 && this.itemsInTheCart <= 4) {
      this.itemsInTheCart++;
      if (this.itemsInTheCart == 5) {
        this.errorMessage = "Items in the cart cannot exceed 5 products."
      }
    }
  }

  onRemoveProductClick() {
    if (this.itemsInTheCart > 0) {
      this.itemsInTheCart--;
      this.errorMessage = "";
    }
  }
}
