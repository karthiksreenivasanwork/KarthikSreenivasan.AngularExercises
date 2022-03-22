import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mponeaddproducts',
  templateUrl: './mponeaddproducts.component.html',
  styleUrls: ['./mponeaddproducts.component.scss']
})
export class MponeaddproductsComponent implements OnInit {

  errorMessage: string = "";
  productName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onAddProductClick() {

  }
}
