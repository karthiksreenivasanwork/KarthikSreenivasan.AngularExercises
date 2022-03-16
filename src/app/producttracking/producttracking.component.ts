import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producttracking',
  templateUrl: './producttracking.component.html',
  styleUrls: ['./producttracking.component.scss']
})
export class ProducttrackingComponent implements OnInit {

  itemsInTheCart: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddProductClick() {
      if (this.itemsInTheCart >= 0) {
          this.itemsInTheCart++;
      }
  }

  onRemoveProductClick() {
      if (this.itemsInTheCart > 0) {
          this.itemsInTheCart--;
      }
  }
}
