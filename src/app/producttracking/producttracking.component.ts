import { Component, OnInit } from '@angular/core';
import { retryWhen } from 'rxjs';

@Component({
  selector: 'app-producttracking',
  templateUrl: './producttracking.component.html',
  styleUrls: ['./producttracking.component.scss']
})
export class ProducttrackingComponent implements OnInit {

  itemsInTheCart: number = 0;
  errorMessage: string = "";

  constructor() { }

  ngOnInit(): void {
  }

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
