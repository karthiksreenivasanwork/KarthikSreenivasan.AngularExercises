import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../../models/productdetails';
import { MponeuserService } from '../../mponeservice/mponeuser.service';

@Component({
  selector: 'app-mponelistproducts',
  templateUrl: './mponelistproducts.component.html',
  styleUrls: ['./mponelistproducts.component.scss'],
})
export class MponelistproductsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'price', 'cardnumber', 'operations'];

  datasource: ProductDetails[] = [];

  constructor(public mponeuserService: MponeuserService) {
    this.datasource = mponeuserService.getProductDetails();
  }

  ngOnInit(): void {}

  onedit() {}

  ondelete() {}
}
