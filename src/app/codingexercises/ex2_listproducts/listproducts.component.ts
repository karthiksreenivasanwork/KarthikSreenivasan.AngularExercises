import { Component, OnInit } from '@angular/core';

/**
 * Ex# 2: Directives
 * Dashboard that mocks listing products added from a shopping cart.
 */
@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.scss']
})
export class ListproductsComponent implements OnInit {

  productCollection: string[] = [];

  errorMessage: string = "";
  productName: string = "";

  isToggleVisible = false;

  constructor() {
    this.productCollection.push("IPhone 13");
    this.productCollection.push("IPhone 13 Pro");
    this.productCollection.push("IPad 10.2");
    this.productCollection.push("Samsung Galaxy S22 Ultra");
    this.productCollection.push("Samsung Galaxy Z");
    this.productCollection.push("Samsung Galaxy Note");
    this.productCollection.push("Google Pixelbook Go");
    this.productCollection.push("Google Pixel 5a with 5G");
    this.productCollection.push("Google Pixel 6");
  }

  ngOnInit(): void {
  }

  onAddProductClick() {
    this.productCollection.push(this.productName);
    this.isToggleVisible = !this.isToggleVisible;
  }
}
